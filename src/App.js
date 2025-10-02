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
// App.js
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
              <div className="container py-12 md:py-20">
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
                    <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                      Moe
                    </span>
                    <span className="text-gray-900"> – Your Mozaik Expert</span>
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
                    Expert answers for Mozaik, VCarve, Fusion 360, and more. Get professional millwork guidance instantly.
                  </p>
                  
                  {/* Search Form */}
                  <form onSubmit={handleSubmit} className="mb-12 md:mb-16">
                    <div className="relative max-w-2xl mx-auto px-4">
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Ask Moe anything about your millwork project..."
                        className="w-full px-4 md:px-6 py-3 md:py-4 text-base border-2 border-gray-200 rounded-xl md:rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 shadow-lg transition-all duration-200 bg-white pr-28 md:pr-32"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 md:px-6 py-2 rounded-lg text-sm font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        Ask Moe
                      </button>
                    </div>
                  </form>

                  {/* Supported Systems */}
                  <div className="mb-12 md:mb-16">
                    <p className="text-sm font-semibold text-gray-500 mb-6 md:mb-8 uppercase tracking-wide">Supported Systems</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                      {[
                        { name: 'Mozaik', letter: 'M', color: 'from-blue-500 to-blue-600' },
                        { name: 'VCarve', letter: 'V', color: 'from-green-500 to-green-600' },
                        { name: 'Fusion 360', letter: 'F', color: 'from-purple-500 to-purple-600' }
                      ].map((system, index) => (
                        <div key={system.name} className="flex flex-col items-center group">
                          <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${system.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 shadow-lg group-hover:shadow-xl transition-all duration-200`}>
                            <span className="text-white font-bold text-base md:text-lg">{system.letter}</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{system.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white border-t border-gray-100">
              <div className="container py-12 md:py-20">
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl md:rounded-3xl p-8 md:p-16 border border-primary-100 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
                      Get Started with Moe
                    </h3>
                    <p className="text-base md:text-xl text-gray-600 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed text-balance">
                      Free tier includes 5 queries per day. Upgrade to Pro for unlimited access, file parsing, and advanced millwork diagnostics.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8">
                      <button
                        onClick={() => navigateTo('chat')}
                        className="btn btn-primary btn-lg w-full sm:w-auto"
                      >
                        Start Free Trial
                      </button>
                      <button
                        onClick={() => navigateTo('pricing')}
                        className="btn btn-secondary btn-lg w-full sm:w-auto"
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
      
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => navigateTo('home')}
              className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary-600 cursor-pointer transition-colors duration-200"
            >
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                MOE
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => navigateTo('pricing')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentPage === 'pricing' 
                    ? 'bg-primary-100 text-primary-700 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Plans & Pricing
              </button>
              <button
                onClick={() => navigateTo('chat')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  currentPage === 'chat' 
                    ? 'bg-primary-100 text-primary-700 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => navigateTo('upload')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
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
                  className="btn btn-secondary btn-sm ml-4"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigateTo('login')}
                  className="btn btn-primary btn-sm ml-4"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary btn-sm"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigateTo('login')}
                  className="btn btn-primary btn-sm"
                >
                  Login
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-button"
                aria-label="Toggle menu"
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
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <>
            <div className="nav-overlay" onClick={() => setMobileMenuOpen(false)} />
            <div className="nav-mobile md:hidden">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => navigateTo('pricing')}
                  className="text-left py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Plans & Pricing
                </button>
                <button
                  onClick={() => navigateTo('chat')}
                  className="text-left py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Chat
                </button>
                <button
                  onClick={() => navigateTo('upload')}
                  className="text-left py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  File Upload
                </button>
                <div className="border-t border-gray-200 pt-4">
                  {isLoggedIn ? (
                    <button
                      onClick={handleLogout}
                      className="w-full btn btn-secondary"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => navigateTo('login')}
                      className="w-full btn btn-primary"
                    >
                      Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Main Content */}
      {renderPage()}
    </div>
  );
}

export default App;