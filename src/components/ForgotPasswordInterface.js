// import React, { useState } from 'react';
// import { authAPI } from '../services/api';

// const ForgotPasswordInterface = ({ onResetPassword, onSwitchToLogin }) => {
//   const [email, setEmail] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!email.trim()) {
//       setError('Please enter your email address');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     setError('');
//     setIsLoading(true);

//     try {
//       await authAPI.forgotPassword({ email });
//       setIsSubmitted(true);
//     } catch (error) {
//       if (error.response?.data?.message) {
//         setError(error.response.data.message);
//       } else {
//         setError('Failed to send reset email. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     if (error) setError('');
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
//         <div className="w-4/5 max-w-2xl mx-auto px-8">
//           <div className="text-center mb-8">
//             <button
//               onClick={() => window.history.back()}
//               className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors font-medium"
//             >
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//               Back
//             </button>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               Check Your Email
//             </h1>
//             <p className="text-lg text-gray-600">
//               We've sent you a password reset link
//             </p>
//           </div>

//           <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//               </div>
              
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                 Reset Link Sent!
//               </h2>
              
//               <p className="text-gray-600 mb-6">
//                 We've sent a password reset link to <span className="font-semibold text-gray-900">{email}</span>. 
//                 Please check your email and click the link to reset your password.
//               </p>
              
//               <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6">
//                 <p className="text-sm text-blue-800">
//                   <strong>Didn't receive the email?</strong> Check your spam folder or try again with a different email address.
//                 </p>
//               </div>
              
//               <button
//                 onClick={() => {
//                   setIsSubmitted(false);
//                   setEmail('');
//                 }}
//                 className="w-full py-4 px-6 rounded-2xl font-semibold text-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300 mb-4"
//               >
//                 Try Another Email
//               </button>
              
//               <button
//                 onClick={onSwitchToLogin}
//                 className="w-full py-4 px-6 rounded-2xl font-semibold text-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
//               >
//                 Back to Sign In
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
//       <div className="w-4/5 max-w-2xl mx-auto px-8">
//         <div className="text-center mb-8">
//           <button
//             onClick={() => window.history.back()}
//             className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors font-medium"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back
//           </button>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             Reset Password
//           </h1>
//           <p className="text-lg text-gray-600">
//             Enter your email to receive a reset link
//           </p>
//         </div>

//         <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12">
//           <form onSubmit={handleSubmit} className="space-y-8">
//             <div>
//               <label className="block text-xl font-semibold text-gray-900 mb-4">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 placeholder="Enter your email address"
//                 className={`w-full px-8 py-5 text-xl border rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
//                   error ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 required
//               />
//               {error && (
//                 <p className="mt-2 text-sm text-red-600">{error}</p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 ${
//                 isLoading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
//               }`}
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Sending Reset Link...
//                 </div>
//               ) : (
//                 'Send Reset Link'
//               )}
//             </button>
//           </form>

//           <div className="my-8">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">Remember your password?</span>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={onSwitchToLogin}
//             className="w-full py-4 px-6 rounded-2xl font-semibold text-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
//           >
//             Back to Sign In
//           </button>
//         </div>

//         <div className="mt-10 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8">
//           <div className="flex items-start">
//             <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
//               <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-semibold text-orange-900 mb-1">Need Help?</p>
//               <p className="text-orange-800 text-sm">If you're still having trouble, contact our support team and we'll help you regain access to your account.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordInterface;
import React, { useState } from 'react';
import { authAPI } from '../services/api';

const ForgotPasswordInterface = ({ onResetPassword, onSwitchToLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      await authAPI.forgotPassword({ email });
      setIsSubmitted(true);
    } catch (error) {
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to send reset email. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-md w-full space-y-8 relative z-10">
          {/* Header Section */}
          <div className="text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-all duration-300 font-medium text-sm group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>

            {/* Success Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Check Your Email
            </h1>
            <p className="text-lg text-white/70 max-w-sm mx-auto leading-relaxed">
              We've sent you a password reset link
            </p>
          </div>

          {/* Success Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-500">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Reset Link Sent!
              </h2>
              
              <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
                We've sent a password reset link to <span className="font-semibold text-white">{email}</span>. 
                Please check your email and click the link to reset your password.
              </p>
              
              <div className="bg-blue-400/10 border border-blue-400/30 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                <p className="text-blue-300 text-sm text-center">
                  <strong>Didn't receive the email?</strong> Check your spam folder or try again with a different email address.
                </p>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                  }}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-lg border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  Try Another Email
                </button>
                
                <button
                  onClick={onSwitchToLogin}
                  className="w-full py-4 px-6 rounded-2xl font-bold text-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/20"
                >
                  Back to Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Support Card */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-blue-400/20 p-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-400/20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-blue-300 mb-2 text-lg">Need Help?</p>
                <p className="text-blue-100/90 text-sm leading-relaxed">
                  If you're still having trouble, contact our support team and we'll help you regain access to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Header Section */}
        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-all duration-300 font-medium text-sm group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          {/* Lock Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Reset Password
          </h1>
          <p className="text-lg text-white/70 max-w-sm mx-auto leading-relaxed">
            Enter your email to receive a reset link
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-3 transition-all duration-300 group-focus-within:text-orange-300">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-base bg-white/5 border-2 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  error 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/10 focus:border-orange-400 focus:ring-orange-400/20'
                }`}
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                isLoading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 shadow-2xl hover:shadow-orange-500/25'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Reset Link...
                </div>
              ) : (
                <span className="flex items-center justify-center">
                  Send Reset Link
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">Remember your password?</span>
              </div>
            </div>
          </div>

          {/* Login Switch Button */}
          <button
            onClick={onSwitchToLogin}
            className="w-full py-4 px-6 rounded-2xl font-bold text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95 mt-4 backdrop-blur-sm"
          >
            Back to Sign In
          </button>
        </div>

        {/* Support Card */}
        <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-xl rounded-3xl border border-orange-400/20 p-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-orange-400/20 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
              <svg className="w-6 h-6 text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-orange-300 mb-2 text-lg">Need Help?</p>
              <p className="text-orange-100/90 text-sm leading-relaxed">
                If you're still having trouble, contact our support team and we'll help you regain access to your account.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .mobile-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPasswordInterface;