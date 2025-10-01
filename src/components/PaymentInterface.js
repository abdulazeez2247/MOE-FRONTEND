// import React, { useEffect } from "react";

// const PaymentInterface = ({ selectedPlan, onPaymentSuccess, onBackToPricing }) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://js.stripe.com/v3/pricing-table.js';
//     script.async = true;
//     script.onload = () => {
//       console.log('Stripe Pricing Table script loaded');
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <button
//             onClick={onBackToPricing}
//             className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors font-medium"
//           >
//             <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to Plans
//           </button>
          
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Complete Your Purchase
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Secure payment powered by Stripe. Your subscription will start immediately after payment.
//           </p>
//         </div>

//         {/* Selected Plan Summary */}
//         {selectedPlan && (
//           <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-12 max-w-2xl mx-auto">
//             <div className="text-center">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Selected Plan</h3>
//               <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
//                 <h4 className="text-3xl font-bold text-primary-600 mb-2">{selectedPlan.name}</h4>
//                 <div className="flex items-baseline justify-center mb-4">
//                   <span className="text-4xl font-bold text-gray-900">{selectedPlan.price}</span>
//                   <span className="text-gray-500 ml-2">/month</span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{selectedPlan.queries} queries • {selectedPlan.model}</p>
//                 <p className="text-sm text-gray-500">{selectedPlan.description}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Stripe Pricing Table Container */}
//         <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
//           <div className="text-center mb-8">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Payment Method</h3>
//             <p className="text-gray-600">All payments are processed securely through Stripe</p>
//           </div>
          
//           <div className="max-w-4xl mx-auto">
//             <stripe-pricing-table
//               pricing-table-id="prctbl_1QwAbC2eZvKYlo2CgUv8pQqT" 
//               publishable-key="pk_test_51RwMz05JNHcvuz94sjCN54asKUd4bCLag0loJmElJLyWJwwmgUFlr9J3llxb5GtXV97C3O7sCXty8Tc4M0s3iVi400KRiZl9GM"
//             >
//             </stripe-pricing-table>
//           </div>
//         </div>

//         {/* Security & Trust Section */}
//         <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
//                 <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-green-900 mb-2">Secure Payment</h4>
//               <p className="text-green-800 text-sm">256-bit SSL encryption protects your payment information</p>
//             </div>
            
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
//                 <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-green-900 mb-2">Instant Access</h4>
//               <p className="text-green-800 text-sm">Your subscription activates immediately after payment</p>
//             </div>
            
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
//                 <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <h4 className="text-lg font-semibold text-green-900 mb-2">Cancel Anytime</h4>
//               <p className="text-green-800 text-sm">No long-term contracts, cancel whenever you want</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentInterface;
import React, { useEffect, useState } from "react";

const PaymentInterface = ({ selectedPlan, onPaymentSuccess, onBackToPricing }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if Stripe script is already loaded
    if (document.querySelector('script[src*="stripe.com"]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    script.onload = () => {
      setScriptLoaded(true);
      console.log('Stripe Pricing Table script loaded');
    };
    script.onerror = () => {
      console.error('Failed to load Stripe script');
    };
    document.body.appendChild(script);

    return () => {
      // Only remove if we're the one who added it
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <button
            onClick={onBackToPricing}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 sm:mb-8 transition-all duration-300 font-medium text-sm sm:text-base group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Plans
          </button>
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Complete Your Purchase
          </h1>
          <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            Secure payment powered by Stripe. Your subscription activates instantly after payment.
          </p>
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 mb-8 sm:mb-12 max-w-2xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Selected Plan</h3>
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-400/30 backdrop-blur-sm">
                <h4 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-2">{selectedPlan.name}</h4>
                <div className="flex items-baseline justify-center mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-white">{selectedPlan.price}</span>
                  <span className="text-white/60 ml-2 text-lg sm:text-xl">/month</span>
                </div>
                <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base">
                  {selectedPlan.queries} queries • {selectedPlan.model}
                </p>
                <p className="text-white/60 text-xs sm:text-sm">{selectedPlan.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stripe Pricing Table Container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Choose Your Payment Method</h3>
            <p className="text-white/70 text-sm sm:text-base">All payments are processed securely through Stripe</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {scriptLoaded ? (
              <stripe-pricing-table
                pricing-table-id="prctbl_1QwAbC2eZvKYlo2CgUv8pQqT" 
                publishable-key="pk_test_51RwMz05JNHcvuz94sjCN54asKUd4bCLag0loJmElJLyWJwwmgUFlr9J3llxb5GtXV97C3O7sCXty8Tc4M0s3iVi400KRiZl9GM"
              >
              </stripe-pricing-table>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                <div className="w-16 h-16 border-4 border-emerald-400/30 border-t-emerald-400 rounded-full animate-spin mb-4"></div>
                <p className="text-white/70 text-center text-sm sm:text-base">Loading secure payment system...</p>
              </div>
            )}
          </div>
        </div>

        {/* Security & Trust Section */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-emerald-400/20 p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-emerald-300 mb-2">Bank-Level Security</h4>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                256-bit SSL encryption protects your payment information with enterprise-grade security
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-emerald-300 mb-2">Instant Activation</h4>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                Get immediate access to all premium features the moment your payment is confirmed
              </p>
            </div>
            
            <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-400/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-emerald-300 mb-2">Cancel Anytime</h4>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                No long-term contracts or hidden fees. Cancel your subscription whenever you need to
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 sm:pt-8 border-t border-emerald-400/20">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <div className="flex items-center text-white/60 text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                PCI DSS Compliant
              </div>
              <div className="flex items-center text-white/60 text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                GDPR Ready
              </div>
              <div className="flex items-center text-white/60 text-xs sm:text-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                SSL Encrypted
              </div>
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
        
        /* Ensure Stripe pricing table is responsive */
        stripe-pricing-table {
          display: block;
          width: 100%;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .mobile-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .tablet-optimized {
            max-width: 42rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentInterface;