
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import DashboardPage from '@/pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Helmet>
          <title>Ayurnidaan - AI-Powered Ayurvedic Diagnosis Platform</title>
          <meta name="description" content="Empowering Ayurvedic practitioners with AI/ML integrated models for accurate disease identification and diagnosis through comprehensive symptom analysis." />
        </Helmet>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
