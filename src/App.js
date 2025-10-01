// import React, { useState } from 'react';
// import './App.css';
// import ChatInterface from './components/ChatInterface';
// import FileUpload from './components/FileUpload';
// import PricingPlans from './components/PricingPlans';
// import PaymentInterface from './components/PaymentInterface';
// import LoginInterface from './components/LoginInterface';
// import SignupInterface from './components/SignupInterface';
// import ForgotPasswordInterface from './components/ForgotPasswordInterface';
// import PlanSwitcher from './components/PlanSwitcher';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';


// const stripePromise = loadStripe("pk_test_51RwMz05JNHcvuz94sjCN54asKUd4bCLag0loJmElJLyWJwwmgUFlr9J3llxb5GtXV97C3O7sCXty8Tc4M0s3iVi400KRiZl9GM");

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
//   const [userPlan, setUserPlan] = useState('free');
//   const [query, setQuery] = useState('');
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       setCurrentPage('chat');
//     }
//   };

//   const handlePlanSelect = (plan) => {
//     if (plan.name === 'Free') {
//       setUserPlan('free');
//       setCurrentPage('chat');
//     } else {
//       setSelectedPlan(plan);
//       setCurrentPage('payment');
//     }
//   };

//   const handlePaymentSuccess = (plan) => {
//     setUserPlan(plan.name.toLowerCase());
//     setCurrentPage('chat');
//   };

//   const handleLogin = (loginData) => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//     console.log('Login successful:', loginData);
//   };

//   const handleSignup = (signupData) => {
//     setIsLoggedIn(true);
//     setCurrentPage('home');
//     console.log('Signup successful:', signupData);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setCurrentPage('home');
//   };

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'login':
//         return (
//           <LoginInterface
//             onLogin={handleLogin}
//             onSwitchToSignup={() => setCurrentPage('signup')}
//             onSwitchToForgotPassword={() => setCurrentPage('forgot-password')}
//             onBack={() => setCurrentPage('home')}
//           />
//         );
//       case 'signup':
//         return (
//           <SignupInterface
//             onSignup={handleSignup}
//             onSwitchToLogin={() => setCurrentPage('login')}
//             onBack={() => setCurrentPage('home')}
//           />
//         );
//       case 'forgot-password':
//         return (
//           <ForgotPasswordInterface
//             onResetPassword={() => console.log('Password reset requested')}
//             onSwitchToLogin={() => setCurrentPage('login')}
//           />
//         );
//       case 'chat':
//         return <ChatInterface userPlan={userPlan} onUpgradeClick={() => setCurrentPage('pricing')} />;
//       case 'upload':
//         return <FileUpload userPlan={userPlan} onUpgradeClick={() => setCurrentPage('pricing')} />;
//       case 'pricing':
//         return <PricingPlans onPlanSelect={handlePlanSelect} />;
//       case 'payment':
//         return (
//           <Elements stripe={stripePromise}>
//             <PaymentInterface
//               selectedPlan={selectedPlan}
//               onPaymentSuccess={handlePaymentSuccess}
//               onBackToPricing={() => setCurrentPage('pricing')}
//             />
//           </Elements>
//         );
//       default:
//         return (
//           <main className="flex-1 bg-gradient-to-br from-gray-50 to-white">
//             {/* Hero Section */}
//             <div className="relative overflow-hidden">
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="text-center">
//                   <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//                     <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
//                       Moe
//                     </span>
//                     <span className="text-gray-900"> – Your Mozaik Expert</span>
//                   </h1>
//                   <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//                     Expert answers for Mozaik, VCarve, Fusion 360, and more. Get professional millwork guidance instantly.
//                   </p>
                  
//                   {/* Search Form */}
//                   <form onSubmit={handleSubmit} className="mb-16">
//                     <div className="relative max-w-2xl mx-auto px-4">
//                       <input
//                         type="text"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         placeholder="Ask Moe anything about your millwork project..."
//                         className="w-full px-6 py-4 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 shadow-lg transition-all duration-200 bg-white pr-24"
//                       />
//                       <button
//                         type="submit"
//                         className="absolute right-2 top-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                       >
//                         Ask Moe
//                       </button>
//                     </div>
//                   </form>

//                   {/* Supported Systems */}
//                   <div className="mb-16">
//                     <p className="text-sm font-semibold text-gray-500 mb-8 uppercase tracking-wide">Supported Systems</p>
//                     <div className="flex justify-center items-center space-x-8">
//                       <div className="flex flex-col items-center group">
//                         <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200">
//                           <span className="text-white font-bold text-lg">M</span>
//                         </div>
//                         <span className="text-sm font-medium text-gray-700">Mozaik</span>
//                       </div>
//                       <div className="flex flex-col items-center group">
//                         <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200">
//                           <span className="text-white font-bold text-lg">V</span>
//                         </div>
//                         <span className="text-sm font-medium text-gray-700">VCarve</span>
//                       </div>
//                       <div className="flex flex-col items-center group">
//                         <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200">
//                           <span className="text-white font-bold text-lg">F</span>
//                         </div>
//                         <span className="text-sm font-medium text-gray-700">Fusion 360</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CTA Section */}
//             <div className="bg-white border-t border-gray-100">
//               <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//                 <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-3xl p-16 border border-primary-100 shadow-xl">
//                   <div className="text-center">
//                     <h3 className="text-4xl font-bold text-gray-900 mb-6">
//                       Get Started with Moe
//                     </h3>
//                     <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
//                       Free tier includes 5 queries per day. Upgrade to Pro for unlimited access, file parsing, and advanced millwork diagnostics.
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
//                       <button
//                         onClick={() => setCurrentPage('chat')}
//                         className="bg-blue-600 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
//                       >
//                         Start Free Trial
//                       </button>
//                       <button
//                         onClick={() => setCurrentPage('pricing')}
//                         className="bg-blue-600 text-white px-12 py-5 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
//                       >
//                         View Plans
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <PlanSwitcher currentPlan={userPlan} onPlanChange={setUserPlan} />
//       <nav className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <button
//                 onClick={() => setCurrentPage('home')}
//                 className="text-2xl font-bold text-gray-900 hover:text-primary-600 cursor-pointer transition-colors duration-200"
//               >
//                 <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
//                   MOE
//                 </span>
//               </button>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-1">
//                 <button
//                   onClick={() => setCurrentPage('pricing')}
//                   className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     currentPage === 'pricing' 
//                       ? 'bg-primary-100 text-primary-700 shadow-sm' 
//                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                   }`}
//                 >
//                   Plans & Pricing
//                 </button>
//                 <button
//                   onClick={() => setCurrentPage('chat')}
//                   className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     currentPage === 'chat' 
//                       ? 'bg-primary-100 text-primary-700 shadow-sm' 
//                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                   }`}
//                 >
//                   Chat
//                 </button>
//                 <button
//                   onClick={() => setCurrentPage('upload')}
//                   className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     currentPage === 'upload' 
//                       ? 'bg-primary-100 text-primary-700 shadow-sm' 
//                       : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                   }`}
//                 >
//                   File Upload
//                 </button>
//                 {isLoggedIn ? (
//                   <button
//                     onClick={handleLogout}
//                     className="bg-gray-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all duration-200 ml-4 shadow-md hover:shadow-lg"
//                   >
//                     Logout
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => setCurrentPage('login')}
//                     className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 ml-4 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
//                   >
//                     Login
//                   </button>
//                 )}
//               </div>
//             </div>
            
//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setCurrentPage('login')}
//                 className="bg-primary-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-700"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
//       {renderPage()}
//     </div>
//   );
// }

// export default App;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setCurrentPage('chat');
      setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
  };

  const handlePaymentSuccess = (plan) => {
    setUserPlan(plan.name.toLowerCase());
    setCurrentPage('chat');
    setMobileMenuOpen(false);
  };

  const handleLogin = (loginData) => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    setMobileMenuOpen(false);
    console.log('Login successful:', loginData);
  };

  const handleSignup = (signupData) => {
    setIsLoggedIn(true);
    setCurrentPage('home');
    setMobileMenuOpen(false);
    console.log('Signup successful:', signupData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
    setMobileMenuOpen(false);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
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
            onBack={() => setCurrentPage('home')}
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
          <main className="flex-1 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <div className="text-center">
                  {/* Logo/Brand */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-2xl">
                    <span className="text-2xl sm:text-3xl font-bold text-white">M</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Moe
                    </span>
                    <span className="text-white"> – Your Millwork Expert</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                    Expert answers for Mozaik, VCarve, Fusion 360, and more. Get professional millwork guidance instantly.
                  </p>
                  
                  {/* Search Form */}
                  <form onSubmit={handleSubmit} className="mb-12 sm:mb-16 lg:mb-20">
                    <div className="relative max-w-2xl mx-auto px-4">
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask Moe anything about your millwork project..."
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-white/20 bg-white/10 backdrop-blur-xl rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 text-white placeholder-white/60 shadow-2xl transition-all duration-200 pr-28 sm:pr-32"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        Ask Moe
                      </button>
                    </div>
                  </form>

                  {/* Supported Systems */}
                  <div className="mb-12 sm:mb-16 lg:mb-20">
                    <p className="text-sm font-semibold text-white/60 mb-6 sm:mb-8 uppercase tracking-wide">Supported Systems</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                      {[
                        { name: 'Mozaik', color: 'from-blue-400 to-cyan-500', letter: 'M' },
                        { name: 'VCarve', color: 'from-green-400 to-emerald-500', letter: 'V' },
                        { name: 'Fusion 360', color: 'from-purple-400 to-pink-500', letter: 'F' },
                        { name: 'CNC', color: 'from-orange-400 to-red-500', letter: 'C' }
                      ].map((system, index) => (
                        <div key={system.name} className="flex flex-col items-center group">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${system.color} rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-200`}>
                            <span className="text-white font-bold text-lg sm:text-xl">{system.letter}</span>
                          </div>
                          <span className="text-sm font-medium text-white/80">{system.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/5 backdrop-blur-xl border-t border-white/10">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-6 sm:p-12 lg:p-16 border border-cyan-400/20 shadow-2xl">
                  <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                      Get Started with Moe
                    </h3>
                    <p className="text-lg text-white/70 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                      Free tier includes 5 queries per day. Upgrade to Pro for unlimited access, file parsing, and advanced millwork diagnostics.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                      <button
                        onClick={() => navigateTo('chat')}
                        className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        Start Free Trial
                      </button>
                      <button
                        onClick={() => navigateTo('pricing')}
                        className="w-full sm:w-auto bg-white/10 text-white border-2 border-white/20 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl text-lg font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-sm transform hover:-translate-y-1 hover:scale-105"
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
    <div className="min-h-screen bg-slate-900">
      <PlanSwitcher currentPlan={userPlan} onPlanChange={setUserPlan} />
      
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => navigateTo('home')}
                className="text-2xl font-bold text-white hover:text-cyan-400 cursor-pointer transition-colors duration-200 flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  MOE
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <button
                  onClick={() => navigateTo('pricing')}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    currentPage === 'pricing' 
                      ? 'bg-cyan-500/20 text-cyan-400 shadow-sm border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Plans & Pricing
                </button>
                <button
                  onClick={() => navigateTo('chat')}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    currentPage === 'chat' 
                      ? 'bg-cyan-500/20 text-cyan-400 shadow-sm border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => navigateTo('upload')}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    currentPage === 'upload' 
                      ? 'bg-cyan-500/20 text-cyan-400 shadow-sm border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  File Upload
                </button>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-white/10 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-200 ml-4 border border-white/20 backdrop-blur-sm"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigateTo('login')}
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 ml-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="bg-white/10 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/20 border border-white/20"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigateTo('login')}
                  className="bg-cyan-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-cyan-600"
                >
                  Login
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => navigateTo('pricing')}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 text-left ${
                    currentPage === 'pricing' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Plans & Pricing
                </button>
                <button
                  onClick={() => navigateTo('chat')}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 text-left ${
                    currentPage === 'chat' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Chat with Moe
                </button>
                <button
                  onClick={() => navigateTo('upload')}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 text-left ${
                    currentPage === 'upload' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  File Upload
                </button>
                <button
                  onClick={() => navigateTo('home')}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 text-left ${
                    currentPage === 'home' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Home
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {renderPage()}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-from-top {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: slide-in-from-top 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;