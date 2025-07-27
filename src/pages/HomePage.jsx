import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Leaf, Brain, Users, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning models trained on traditional Ayurvedic principles"
    },
    {
      icon: Stethoscope,
      title: "Symptom Analysis",
      description: "Comprehensive symptom reading and pattern recognition for accurate diagnosis"
    },
    {
      icon: Users,
      title: "Practitioner Network",
      description: "Connect with certified Ayurvedic practitioners and share knowledge"
    },
    {
      icon: Leaf,
      title: "Traditional Wisdom",
      description: "Combining ancient Ayurvedic knowledge with modern technology"
    }
  ];

  const benefits = [
    "Accurate disease identification through AI analysis",
    "Comprehensive symptom pattern recognition",
    "Evidence-based treatment recommendations",
    "Secure patient data management",
    "Continuous learning and improvement"
  ];

  return (
    <>
      <Helmet>
        <title>Ayurnidaan - AI-Powered Ayurvedic Diagnosis Platform</title>
        <meta name="description" content="Empowering Ayurvedic practitioners with AI/ML integrated models for accurate disease identification and diagnosis through comprehensive symptom analysis." />
      </Helmet>
      
      <div className="min-h-screen ayurveda-pattern leaf-pattern">
        {/* Navigation */}
        <nav className="glass-effect border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-2"
              >
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="font-display text-2xl font-bold text-white">Ayurnidaan</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-4"
              >
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">Sign UP</Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Revolutionizing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"> Ayurvedic </span>
                  Diagnosis
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Empowering Ayurvedic practitioners with AI-powered diagnostic tools that combine ancient wisdom with modern technology for precise disease identification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/signup">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-effect rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-yellow-400/20"></div>
                  <img  
                    className="w-full h-96 object-cover rounded-2xl relative z-10" 
                    alt="Ayurvedic practitioner using AI diagnosis tools"
                   src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-white mb-4">
                Powerful Features for Modern Practitioners
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Our platform combines the best of traditional Ayurvedic knowledge with cutting-edge AI technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-3">{feature.title}</h3>
                  <p className="text-green-100">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img  
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl" 
                  alt="AI analysis of Ayurvedic symptoms and patterns"
                 src="https://images.unsplash.com/photo-1677442136019-21780ecad995" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl font-bold text-white mb-6">
                  Why Choose Ayurnidaan?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Transform your practice with our comprehensive AI-powered diagnostic platform designed specifically for Ayurvedic practitioners.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                      <span className="text-white text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect rounded-3xl p-12"
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of Ayurvedic practitioners who are already using AI to enhance their diagnostic capabilities.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 text-xl">
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="glass-effect border-t border-white/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="font-display text-2xl font-bold text-white">Ayurnidaan</span>
              </div>
              <p className="text-green-100 text-center md:text-right">
                © 2024 Ayurnidaan. Empowering Ayurvedic practitioners with AI technology.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;