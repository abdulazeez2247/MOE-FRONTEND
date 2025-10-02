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
// components/PaymentInterface.js
import React, { useEffect } from "react";

const PaymentInterface = ({ selectedPlan, onPaymentSuccess, onBackToPricing }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    script.onload = () => {
      console.log('Stripe Pricing Table script loaded');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 md:py-16">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <button
            onClick={onBackToPricing}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 md:mb-6 transition-colors font-medium text-sm md:text-base"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Plans
          </button>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
            Complete Your Purchase
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-balance">
            Secure payment powered by Stripe. Your subscription will start immediately after payment.
          </p>
        </div>

        {/* Selected Plan Summary */}
        {selectedPlan && (
          <div className="card p-6 md:p-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Selected Plan</h3>
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-primary-100">
                <h4 className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">{selectedPlan.name}</h4>
                <div className="flex items-baseline justify-center mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">{selectedPlan.price}</span>
                  <span className="text-gray-500 ml-2 text-sm md:text-base">/month</span>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-2">{selectedPlan.queries} queries • {selectedPlan.model}</p>
                <p className="text-xs md:text-sm text-gray-500 text-balance">{selectedPlan.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stripe Pricing Table Container */}
        <div className="card p-4 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4 text-balance">Choose Your Payment Method</h3>
            <p className="text-gray-600 text-sm md:text-base">All payments are processed securely through Stripe</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <stripe-pricing-table
              pricing-table-id="prctbl_1QwAbC2eZvKYlo2CgUv8pQqT" 
              publishable-key="pk_test_51RwMz05JNHcvuz94sjCN54asKUd4bCLag0loJmElJLyWJwwmgUFlr9J3llxb5GtXV97C3O7sCXty8Tc4M0s3iVi400KRiZl9GM"
            >
            </stripe-pricing-table>
          </div>
        </div>

        {/* Security & Trust Section */}
        <div className="mt-8 md:mt-12 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Secure Payment",
                description: "256-bit SSL encryption protects your payment information"
              },
              {
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Instant Access",
                description: "Your subscription activates immediately after payment"
              },
              {
                icon: (
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                ),
                title: "Cancel Anytime",
                description: "No long-term contracts, cancel whenever you want"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                  {item.icon}
                </div>
                <h4 className="text-base md:text-lg font-semibold text-green-900 mb-1 md:mb-2 text-balance">{item.title}</h4>
                <p className="text-green-800 text-xs md:text-sm text-balance">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInterface;