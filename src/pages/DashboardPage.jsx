
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  Leaf, 
  User, 
  Brain, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Plus,
  Activity,
  TrendingUp,
  Calendar,
  Bell
} from 'lucide-react';

const DashboardPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const user = localStorage.getItem('ayurnidaan_current_user');
    if (!user) {
      navigate('/login');
      return;
    }
    setCurrentUser(JSON.parse(user));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('ayurnidaan_current_user');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/');
  };

  const handleFeatureClick = (featureName) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `${featureName} functionality will be available soon.`,
    });
  };

  if (!currentUser) {
    return null;
  }

  const stats = [
    {
      title: "Total Patients",
      value: "127",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "AI Diagnoses",
      value: "89",
      change: "+8%",
      icon: Brain,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Success Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "This Month",
      value: "23",
      change: "+15%",
      icon: Calendar,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const quickActions = [
    {
      title: "New Diagnosis",
      description: "Start AI-powered symptom analysis",
      icon: Brain,
      color: "bg-gradient-to-r from-green-500 to-green-600"
    },
    {
      title: "Patient Records",
      description: "View and manage patient data",
      icon: FileText,
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      title: "Treatment Plans",
      description: "Create personalized treatments",
      icon: Activity,
      color: "bg-gradient-to-r from-purple-500 to-purple-600"
    },
    {
      title: "Knowledge Base",
      description: "Access Ayurvedic resources",
      icon: Leaf,
      color: "bg-gradient-to-r from-orange-500 to-orange-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - Ayurnidaan</title>
        <meta name="description" content="Your Ayurnidaan practitioner dashboard with AI-powered diagnostic tools and patient management." />
      </Helmet>
      
      <div className="min-h-screen ayurveda-pattern leaf-pattern">
        {/* Navigation */}
        <nav className="glass-effect border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="font-display text-2xl font-bold text-white">Ayurnidaan</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleFeatureClick('Notifications')}
                  className="text-white hover:bg-white/10"
                >
                  <Bell className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => handleFeatureClick('Settings')}
                  className="text-white hover:bg-white/10"
                >
                  <Settings className="h-5 w-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="text-white hover:bg-white/10"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-display text-3xl font-bold text-white mb-2">
                    Welcome back, Dr. {currentUser.name}
                  </h1>
                  <p className="text-green-100 text-lg">
                    Ready to help your patients with AI-powered diagnostics?
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <h3 className="text-white text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-green-100 text-sm">{stat.title}</p>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect rounded-2xl p-6 cursor-pointer hover:bg-white/10 transition-all duration-300"
                  onClick={() => handleFeatureClick(action.title)}
                >
                  <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{action.title}</h3>
                  <p className="text-green-100 text-sm">{action.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity & AI Insights */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold text-white">Recent Activity</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleFeatureClick('View All Activity')}
                  className="text-green-400 hover:text-green-300"
                >
                  View All
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  { action: "Diagnosed patient with Vata imbalance", time: "2 hours ago" },
                  { action: "Updated treatment plan for chronic condition", time: "4 hours ago" },
                  { action: "AI analysis completed for new patient", time: "6 hours ago" },
                  { action: "Consultation notes added", time: "1 day ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-green-200 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-bold text-white">AI Insights</h2>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => handleFeatureClick('More Insights')}
                  className="text-green-400 hover:text-green-300"
                >
                  More
                </Button>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30">
                  <h3 className="text-white font-semibold mb-2">Pattern Recognition</h3>
                  <p className="text-green-100 text-sm">
                    AI has identified increased Pitta-related symptoms in 23% of recent cases.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30">
                  <h3 className="text-white font-semibold mb-2">Treatment Efficacy</h3>
                  <p className="text-green-100 text-sm">
                    Herbal combinations show 89% success rate in digestive disorders.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30">
                  <h3 className="text-white font-semibold mb-2">Seasonal Trends</h3>
                  <p className="text-green-100 text-sm">
                    Respiratory conditions increased by 15% this month.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Start Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <div className="glass-effect rounded-2xl p-6">
              <h2 className="font-display text-xl font-bold text-white mb-4">Getting Started with AI Diagnosis</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Input Symptoms</h3>
                  <p className="text-green-100 text-sm">Enter patient symptoms and observations</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">AI Analysis</h3>
                  <p className="text-green-100 text-sm">Let AI analyze patterns and suggest diagnosis</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Treatment Plan</h3>
                  <p className="text-green-100 text-sm">Receive personalized treatment recommendations</p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button 
                  onClick={() => handleFeatureClick('Start New Diagnosis')}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Start Your First Diagnosis
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
