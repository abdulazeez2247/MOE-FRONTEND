import React, { useState } from 'react';
import './App.css';
import ChatInterface from './components/ChatInterface';
import FileUpload from './components/FileUpload';
import PricingPlans from './components/PricingPlans';
import PaymentInterface from './components/PaymentInterface';
import LoginInterface from './components/LoginInterface';
import SignupInterface from './components/SignupInterface';
import ForgotPasswordInterface from './components/ForgotPasswordInterface';
import PlanSwitcher from './components/PlanSwitcher';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe("pk_test_51RwMz05JNHcvuz94sjCN54asKUd4bCLag0loJmElJLyWJwwmgUFlr9J3llxb5GtXV97C3O7sCXty8Tc4M0s3iVi400KRiZl9GM");

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userPlan, setUserPlan] = useState('free');
  const [query, setQuery] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setCurrentPage('chat');
    }
  };

  const handlePlanSelect = (plan) => {
    if (plan.name === 'Free') {
      setUserPlan('free');
      setCurrentPage('chat');
    } else {
      setSelectedPlan(plan);
      setCurrentPage('payment');
    }
  };

  const handlePaymentSuccess = (plan) => {
    setUserPlan(plan.name.toLowerCase());
    setCurrentPage('chat');
  };

  const handleLogin = (loginData) => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    console.log('Login successful:', loginData);
  };

  const handleSignup = (signupData) => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    console.log('Signup successful:', signupData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <LoginInterface
            onLogin={handleLogin}
            onSwitchToSignup={() => setCurrentPage('signup')}
            onSwitchToForgotPassword={() => setCurrentPage('forgot-password')}
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'signup':
        return (
          <SignupInterface
            onSignup={handleSignup}
            onSwitchToLogin={() => setCurrentPage('login')}
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'forgot-password':
        return (
          <ForgotPasswordInterface
            onResetPassword={() => console.log('Password reset requested')}
            onSwitchToLogin={() => setCurrentPage('login')}
          />
        );
      case 'chat':
        return <ChatInterface userPlan={userPlan} onUpgradeClick={() => setCurrentPage('pricing')} />;
      case 'upload':
        return <FileUpload userPlan={userPlan} onUpgradeClick={() => setCurrentPage('pricing')} />;
      case 'pricing':
        return <PricingPlans onPlanSelect={handlePlanSelect} />;
      case 'payment':
        return (
          <Elements stripe={stripePromise}>
            <PaymentInterface
              selectedPlan={selectedPlan}
              onPaymentSuccess={handlePaymentSuccess}
              onBackToPricing={() => setCurrentPage('pricing')}
            />
          </Elements>
        );
      default:
        return (
          <main className="flex-1 bg-gradient-to-br from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                      Moe
                    </span>
                    <span className="text-gray-900"> – Your Mozaik Expert</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Expert answers for Mozaik, VCarve, Fusion 360, and more. Get professional millwork guidance instantly.
                  </p>
                  
                  {/* Search Form */}
                  <form onSubmit={handleSubmit} className="mb-16">
                    <div className="relative max-w-2xl mx-auto px-4">
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask Moe anything about your millwork project..."
                        className="w-full px-6 py-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 shadow-lg transition-all duration-200 bg-white pr-24"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        Ask Moe
                      </button>
                    </div>
                  </form>

                  {/* Supported Systems */}
                  <div className="mb-16">
                    <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wide">Supported Systems</p>
                    <div className="flex justify-center items-center space-x-8">
                      <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200">
                          <span className="text-white font-bold text-lg">M</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Mozaik</span>
                      </div>
                      <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200">
                          <span className="text-white font-bold text-lg">V</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">VCarve</span>
                      </div>
                      <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200">
                          <span className="text-white font-bold text-lg">F</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Fusion 360</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white border-t border-gray-100">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-16 border border-primary-100 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-gray-900 mb-6">
                      Get Started with Moe
                    </h3>
                    <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                      Free tier includes 5 queries per day. Upgrade to Pro for unlimited access, file parsing, and advanced millwork diagnostics.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
                      <button
                        onClick={() => setCurrentPage('chat')}
                        className="bg-blue-600 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        Start Free Trial
                      </button>
                      <button
                        onClick={() => setCurrentPage('pricing')}
                        className="bg-blue-600 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        View Plans
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PlanSwitcher currentPlan={userPlan} onPlanChange={setUserPlan} />
      <nav className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-2xl font-bold text-gray-900 hover:text-primary-600 cursor-pointer transition-colors duration-200"
              >
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  MOE
                </span>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <button
                  onClick={() => setCurrentPage('pricing')}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentPage === 'pricing' 
                      ? 'bg-primary-100 text-primary-700 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Plans & Pricing
                </button>
                <button
                  onClick={() => setCurrentPage('chat')}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentPage === 'chat' 
                      ? 'bg-primary-100 text-primary-700 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => setCurrentPage('upload')}
                  className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    currentPage === 'upload' 
                      ? 'bg-primary-100 text-primary-700 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  File Upload
                </button>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-200 ml-4 shadow-md hover:shadow-lg"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentPage('login')}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 ml-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setCurrentPage('login')}
                className="bg-primary-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
App.js
