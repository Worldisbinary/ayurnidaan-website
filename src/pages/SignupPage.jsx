import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Leaf, Eye, EyeOff, User, Mail, Lock, Phone } from 'lucide-react';
import { locations } from '@/data/locations';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceState: '',
    practiceCity: '',
    licenseNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [cities, setCities] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const states = Object.keys(locations).sort();

  useEffect(() => {
    if (formData.practiceState) {
      setCities(locations[formData.practiceState]);
      setFormData(prev => ({ ...prev, practiceCity: '' }));
    } else {
      setCities([]);
    }
  }, [formData.practiceState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Password mismatch",
          description: "Passwords do not match. Please try again.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 2000));

      const existingUsers = JSON.parse(localStorage.getItem('ayurnidaan_users') || '[]');
      const userExists = existingUsers.find(user => user.email === formData.email);

      if (userExists) {
        toast({
          title: "Account exists",
          description: "An account with this email already exists. Please login instead.",
          variant: "destructive"
        });
        setIsLoading(false);
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practiceState: formData.practiceState,
        practiceCity: formData.practiceCity,
        licenseNumber: formData.licenseNumber,
        password: formData.password,
        createdAt: new Date().toISOString()
      };

      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('ayurnidaan_users', JSON.stringify(updatedUsers));
      localStorage.setItem('ayurnidaan_current_user', JSON.stringify(newUser));

      toast({
        title: "Account created successfully!",
        description: `Welcome to Ayurnidaan, Dr. ${formData.name}!`,
      });

      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - Ayurnidaan</title>
        <meta name="description" content="Create your Ayurnidaan practitioner account and start using AI-powered diagnostic tools for Ayurvedic medicine." />
      </Helmet>
      
      <div className="min-h-screen ayurveda-pattern leaf-pattern flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-3xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="font-display text-2xl font-bold text-white">Ayurnidaan</span>
              </Link>
              <h1 className="font-display text-3xl font-bold text-white mb-2">Join Ayurnidaan</h1>
              <p className="text-green-100">Create your practitioner account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-green-400" placeholder="Dr. Your Name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-green-400" placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white font-medium">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                  <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-green-400" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="practiceState" className="text-white font-medium">Practice State</Label>
                    <Select name="practiceState" onValueChange={(value) => handleSelectChange('practiceState', value)} value={formData.practiceState}>
                        <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent className="bg-green-900/80 backdrop-blur-md border-white/20 text-white">
                            {states.map(state => <SelectItem key={state} value={state}>{state}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="practiceCity" className="text-white font-medium">Practice City</Label>
                    <Select name="practiceCity" onValueChange={(value) => handleSelectChange('practiceCity', value)} value={formData.practiceCity} disabled={!formData.practiceState}>
                        <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select City" />
                        </SelectTrigger>
                        <SelectContent className="bg-green-900/80 backdrop-blur-md border-white/20 text-white max-h-48 overflow-y-auto">
                            {cities.map(city => <SelectItem key={city} value={city}>{city}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber" className="text-white font-medium">License Number</Label>
                <div className="relative">
                  <Leaf className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                  <Input id="licenseNumber" name="licenseNumber" type="text" required value={formData.licenseNumber} onChange={handleInputChange} className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-green-400" placeholder="Ayurvedic License Number" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                  <Input id="password" name="password" type={showPassword ? "text" : "password"} required value={formData.password} onChange={handleInputChange} className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-green-400" placeholder="Create a strong password" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300">
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white font-medium">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-400" />
                  <Input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} required value={formData.confirmPassword} onChange={handleInputChange} className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-green-200 focus:border-green-400" placeholder="Confirm your password" />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300">
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <input type="checkbox" required className="mt-1 rounded border-white/20 bg-white/10" />
                <span className="text-sm text-green-100">
                  I agree to the{' '}
                  <button type="button" className="text-green-400 hover:text-green-300">
                    Terms of Service
                  </button>
                  {' '}and{' '}
                  <button type="button" className="text-green-400 hover:text-green-300">
                    Privacy Policy
                  </button>
                </span>
              </div>

              <Button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg font-medium">
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-green-100">
                Already have an account?{' '}
                <Link to="/login" className="text-green-400 hover:text-green-300 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;