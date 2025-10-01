// import React, { useState } from 'react';
// import { authAPI, setAuthToken } from '../services/api';

// const LoginInterface = ({ onLogin, onSwitchToSignup, onSwitchToForgotPassword, onBack }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
    
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await authAPI.login({
//         email: formData.email,
//         password: formData.password
//       });
      
//       setAuthToken(response.data.accessToken);
//       onLogin(response.data.user);
      
//     } catch (error) {
//       if (error.response?.data?.message) {
//         setErrors({ submit: error.response.data.message });
//       } else {
//         setErrors({ submit: 'Login failed. Please try again.' });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <button
//             onClick={onBack}
//             className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors font-medium text-sm"
//           >
//             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back
//           </button>
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Welcome Back
//           </h1>
//           <p className="text-sm text-gray-600">
//             Sign in to your MOE account
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   placeholder="Enter your password"
//                   className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 pr-10"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   {showPassword ? (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {errors.submit && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-3">
//                 <p className="text-red-600 text-center text-sm">{errors.submit}</p>
//               </div>
//             )}

//             <div className="text-right">
//               <button
//                 type="button"
//                 onClick={onSwitchToForgotPassword}
//                 className="text-primary-600 hover:text-primary-700 font-medium transition-colors text-sm"
//               >
//                 Forgot your password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
//                 isLoading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-md hover:shadow-lg'
//               }`}
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing In...
//                 </div>
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
//               </div>
//             </div>
//           </div>

//           <button
//             onClick={onSwitchToSignup}
//             className="w-full py-3 px-4 rounded-lg font-semibold text-sm border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 mt-4"
//           >
//             Create Account
//           </button>
//         </div>

//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
//           <div className="flex items-start">
//             <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
//               <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <div>
//               <p className="font-semibold text-blue-900 mb-1 text-sm">Secure Login</p>
//               <p className="text-blue-800 text-xs">Your credentials are encrypted and secure.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginInterface;
import React, { useState } from 'react';
import { authAPI, setAuthToken } from '../services/api';

const LoginInterface = ({ onLogin, onSwitchToSignup, onSwitchToForgotPassword, onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password
      });
      
      setAuthToken(response.data.accessToken);
      onLogin(response.data.user);
      
    } catch (error) {
      if (error.response?.data?.message) {
        setErrors({ submit: error.response.data.message });
      } else {
        setErrors({ submit: 'Login failed. Please check your credentials and try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
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

          {/* Logo/Brand */}
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-lg text-white/70 max-w-sm mx-auto leading-relaxed">
            Sign in to continue your millwork journey
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 transform hover:scale-[1.02] transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-white/90 mb-3 transition-all duration-300 group-focus-within:text-blue-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-base bg-white/5 border-2 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-4 transition-all duration-300 ${
                  errors.email 
                    ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                    : 'border-white/10 focus:border-blue-400 focus:ring-blue-400/20'
                }`}
                required
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="group">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-white/90 transition-all duration-300 group-focus-within:text-blue-300">
                  Password
                </label>
                <button
                  type="button"
                  onClick={onSwitchToForgotPassword}
                  className="text-blue-300 hover:text-blue-200 font-medium transition-all duration-200 text-sm hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 text-base bg-white/5 border-2 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-4 transition-all duration-300 pr-12 ${
                    errors.password 
                      ? 'border-red-400/50 focus:border-red-400 focus:ring-red-400/20' 
                      : 'border-white/10 focus:border-blue-400 focus:ring-blue-400/20'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200 p-1"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-300 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-400/10 border border-red-400/30 rounded-2xl p-4 backdrop-blur-sm">
                <p className="text-red-300 text-center text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                isLoading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-2xl hover:shadow-blue-500/25'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </div>
              ) : (
                <span className="flex items-center justify-center">
                  Sign In
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">New to MOE?</span>
              </div>
            </div>
          </div>

          {/* Signup Switch Button */}
          <button
            onClick={onSwitchToSignup}
            className="w-full py-4 px-6 rounded-2xl font-bold text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 active:scale-95 mt-4 backdrop-blur-sm"
          >
            Create New Account
          </button>
        </div>

        {/* Security Features Card */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-blue-400/20 p-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-blue-300 mb-2 text-lg">Secure & Encrypted</p>
              <p className="text-blue-100/90 text-sm leading-relaxed">
                Your login credentials are protected with enterprise-grade encryption. 
                We never store your password in plain text.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
          .mobile-optimized {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .tablet-optimized {
            max-width: 28rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginInterface;