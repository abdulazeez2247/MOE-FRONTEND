// import React from 'react';

// const PricingPlans = ({ onPlanSelect }) => {
//   const plans = [
//     {
//       name: 'Free',
//       price: '$0',
//       queries: '5/day',
//       model: 'gpt-4o-mini',
//       features: [
//         'Basic answers',
//         'Limited queries',
//         'No file uploads'
//       ],
//       popular: false,
//       description: 'Perfect for trying out MOE'
//     },
//     {
//       name: 'Hobbyist',
//       price: '$9',
//       queries: '100/month',
//       model: 'gpt-4o',
//       features: [
//         'Pro answers with Mozaik menu paths',
//         'Joinery and CNC checks',
//         'Install notes',
//         'File parsing (.cab, .cabx, .mzb, .xml)',
//         'Enhanced RAG'
//       ],
//       popular: false,
//       description: 'Great for small projects'
//     },
//     {
//       name: 'Occasional',
//       price: '$20',
//       queries: '300/month',
//       model: 'gpt-4o',
//       features: [
//         'All Hobbyist features',
//         'More queries per month',
//         'Priority support'
//       ],
//       popular: true,
//       description: 'Most popular choice'
//     },
//     {
//       name: 'Professional',
//       price: '$29',
//       queries: '600/month',
//       model: 'gpt-4o',
//       features: [
//         'All Occasional features',
//         'Advanced diagnostics',
//         'Custom workflows'
//       ],
//       popular: false,
//       description: 'For serious professionals'
//     },
//     {
//       name: 'Enterprise',
//       price: '$149',
//       queries: '5,000/month',
//       model: 'gpt-4o',
//       features: [
//         'All Professional features',
//         'Custom integrations',
//         'Dedicated support',
//         'Custom overage rates'
//       ],
//       popular: false,
//       description: 'For large teams'
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Choose Your Plan
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Start free and upgrade as you grow. All paid plans include file parsing and enhanced features.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
//           {plans.map((plan, index) => (
//             <div
//               key={plan.name}
//               className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
//                 plan.popular 
//                   ? 'border-primary-600 shadow-xl scale-105' 
//                   : 'border-gray-200 hover:border-primary-300'
//               }`}
//             >
//               {/* Popular Badge */}
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
//                     Most Popular
//                   </span>
//                 </div>
//               )}

//               {/* Card Content */}
//               <div className="p-8">
//                 {/* Plan Header */}
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                     {plan.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {plan.description}
//                   </p>
                  
//                   {/* Price */}
//                   <div className="mb-6">
//                     <div className="flex items-baseline justify-center">
//                       <span className="text-5xl font-bold text-gray-900">
//                         {plan.price}
//                       </span>
//                       {plan.price !== '$0' && (
//                         <span className="text-gray-500 ml-2">/month</span>
//                       )}
//                     </div>
//                     <p className="text-sm text-gray-500 mt-2">
//                       {plan.queries} queries • {plan.model}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Features List */}
//                 <div className="mb-8">
//                   <ul className="space-y-4">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start">
//                         <div className="flex-shrink-0 mt-1">
//                           <svg 
//                             className="h-5 w-5 text-green-500" 
//                             fill="currentColor" 
//                             viewBox="0 0 20 20"
//                           >
//                             <path 
//                               fillRule="evenodd" 
//                               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
//                               clipRule="evenodd" 
//                             />
//                           </svg>
//                         </div>
//                         <span className="ml-3 text-sm text-gray-700 leading-relaxed">
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* CTA Button */}
//                 <button
//                   onClick={() => onPlanSelect(plan)}
//                   className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl'
//                       : plan.name === 'Free'
//                       ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
//                       : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
//                   }`}
//                 >
//                   {plan.name === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Section */}
//         <div className="text-center mt-20">
//           <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 p-12 max-w-6xl mx-auto">
//             <div className="mb-12">
//               <h3 className="text-4xl font-bold text-gray-900 mb-4">
//                 All Plans Include
//               </h3>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 Every plan comes with these essential features to help you succeed
//               </p>
//             </div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
//                   <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h4>
//                 <p className="text-base text-gray-600 leading-relaxed max-w-xs">
//                   Enterprise-grade security with end-to-end encryption and data protection
//                 </p>
//               </div>
              
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
//                   <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h4>
//                 <p className="text-base text-gray-600 leading-relaxed max-w-xs">
//                   Round-the-clock expert support when you need it most
//                 </p>
//               </div>
              
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
//                   <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-3">Cancel Anytime</h4>
//                 <p className="text-base text-gray-600 leading-relaxed max-w-xs">
//                   No long-term contracts, cancel whenever you want
//                 </p>
//               </div>
              
//               <div className="flex flex-col items-center text-center group">
//                 <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
//                   <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h4>
//                 <p className="text-base text-gray-600 leading-relaxed max-w-xs">
//                   Expert-level accuracy with industry-specific knowledge
//                 </p>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
//               <div className="flex items-center justify-center space-x-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg">
//                   <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div className="text-center">
//                   <p className="text-lg font-semibold text-gray-900 mb-1">Overage Charges</p>
//                   <p className="text-base text-gray-600">$0.05 per query above plan limit (except Enterprise)</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;
import React, { useState } from 'react';

const PricingPlans = ({ onPlanSelect }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      queries: '5/day',
      model: 'gpt-4o-mini',
      features: [
        'Basic answers',
        'Limited queries',
        'No file uploads'
      ],
      popular: false,
      description: 'Perfect for trying out MOE',
      gradient: 'from-gray-400 to-gray-600',
      color: 'gray'
    },
    {
      name: 'Hobbyist',
      price: '$9',
      queries: '100/month',
      model: 'gpt-4o',
      features: [
        'Pro answers with Mozaik menu paths',
        'Joinery and CNC checks',
        'Install notes',
        'File parsing (.cab, .cabx, .mzb, .xml)',
        'Enhanced RAG'
      ],
      popular: false,
      description: 'Great for small projects',
      gradient: 'from-blue-400 to-cyan-500',
      color: 'blue'
    },
    {
      name: 'Occasional',
      price: '$20',
      queries: '300/month',
      model: 'gpt-4o',
      features: [
        'All Hobbyist features',
        'More queries per month',
        'Priority support'
      ],
      popular: true,
      description: 'Most popular choice',
      gradient: 'from-green-400 to-emerald-500',
      color: 'green'
    },
    {
      name: 'Professional',
      price: '$29',
      queries: '600/month',
      model: 'gpt-4o',
      features: [
        'All Occasional features',
        'Advanced diagnostics',
        'Custom workflows'
      ],
      popular: false,
      description: 'For serious professionals',
      gradient: 'from-purple-400 to-pink-500',
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: '$149',
      queries: '5,000/month',
      model: 'gpt-4o',
      features: [
        'All Professional features',
        'Custom integrations',
        'Dedicated support',
        'Custom overage rates'
      ],
      popular: false,
      description: 'For large teams',
      gradient: 'from-orange-400 to-red-500',
      color: 'orange'
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    onPlanSelect(plan);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
            Start free and upgrade as you grow. All paid plans include file parsing and enhanced features.
          </p>
        </div>

        {/* Mobile Plan Selector */}
        <div className="lg:hidden mb-8">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
            <label className="block text-sm font-semibold text-white mb-3 text-center">
              Select a Plan to View Details
            </label>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((plan) => (
                <button
                  key={plan.name}
                  onClick={() => handlePlanSelect(plan)}
                  className={`p-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                    selectedPlan?.name === plan.name
                      ? `bg-gradient-to-r ${plan.gradient} text-white border-transparent shadow-lg`
                      : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${selectedPlan?.name === plan.name ? 'bg-white' : `bg-gradient-to-r ${plan.gradient}`}`}></div>
                      <span>{plan.name}</span>
                    </div>
                    <p className="text-xs font-normal opacity-80">{plan.price}/mo</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards - Desktop & Tablet */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white/10 backdrop-blur-xl rounded-3xl border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-cyan-400 shadow-2xl scale-105' 
                  : 'border-white/20 hover:border-cyan-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                    {plan.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">
                    {plan.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      {plan.price !== '$0' && (
                        <span className="text-white/60 ml-2 text-lg">/month</span>
                      )}
                    </div>
                    <p className="text-sm text-white/60 mt-2">
                      {plan.queries} • {plan.model}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-1 mb-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg 
                            className="h-4 w-4 text-green-400" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </div>
                        <span className="ml-3 text-sm text-white/90 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-2xl hover:shadow-3xl'
                      : plan.name === 'Free'
                      ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                      : `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl`
                  }`}
                >
                  {plan.name === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Plan Details - Mobile */}
        {selectedPlan && (
          <div className="lg:hidden mt-8">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 transform hover:scale-[1.02] transition-all duration-500">
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${selectedPlan.gradient} bg-clip-text text-transparent`}>
                  {selectedPlan.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {selectedPlan.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">
                      {selectedPlan.price}
                    </span>
                    {selectedPlan.price !== '$0' && (
                      <span className="text-white/60 ml-2 text-lg">/month</span>
                    )}
                  </div>
                  <p className="text-sm text-white/60 mt-2">
                    {selectedPlan.queries} • {selectedPlan.model}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <ul className="space-y-3">
                  {selectedPlan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg 
                          className="h-4 w-4 text-green-400" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-sm text-white/90 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handlePlanSelect(selectedPlan)}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  selectedPlan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 shadow-2xl'
                    : selectedPlan.name === 'Free'
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    : `bg-gradient-to-r ${selectedPlan.gradient} text-white hover:shadow-2xl`
                }`}
              >
                {selectedPlan.name === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
              </button>
            </div>
          </div>
        )}

        {/* Features Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                All Plans Include
              </h3>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Every plan comes with these essential features to help you succeed
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {[
                {
                  icon: (
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Secure & Private",
                  description: "Enterprise-grade security with end-to-end encryption"
                },
                {
                  icon: (
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  title: "24/7 Support",
                  description: "Round-the-clock expert support when you need it"
                },
                {
                  icon: (
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Cancel Anytime",
                  description: "No long-term contracts, cancel whenever"
                },
                {
                  icon: (
                    <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                  title: "Quality Guarantee",
                  description: "Expert-level accuracy with industry knowledge"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Overage Notice */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-base sm:text-lg font-semibold text-white mb-1">Overage Charges</p>
                  <p className="text-sm text-white/70">$0.05 per query above plan limit (except Enterprise)</p>
                </div>
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
      `}</style>
    </div>
  );
};

export default PricingPlans;