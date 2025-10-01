// import React from 'react';

// const PlanSwitcher = ({ currentPlan, onPlanChange }) => {
//   const plans = [
//     { id: 'free', name: 'Free Plan', description: '5 queries/day, gpt-4o-mini' },
//     { id: 'hobbyist', name: 'Hobbyist', description: '100 queries/month, gpt-4o' },
//     { id: 'occasional', name: 'Occasional', description: '300 queries/month, gpt-4o' },
//     { id: 'professional', name: 'Professional', description: '600 queries/month, gpt-4o' },
//     { id: 'enterprise', name: 'Enterprise', description: '5,000 queries/month, gpt-4o' }
//   ];

//   return (
//     <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-sm font-medium text-gray-900">Demo Plan Switcher</h3>
//             <p className="text-xs text-gray-500">Switch between user plans to test different experiences</p>
//           </div>
//           <div className="flex space-x-2">
//             {plans.map((plan) => (
//               <button
//                 key={plan.id}
//                 onClick={() => onPlanChange(plan.id)}
//                 className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
//                   currentPlan === plan.id
//                     ? 'bg-primary-600 text-white'
//                     : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
//                 }`}
//                 title={plan.description}
//               >
//                 {plan.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanSwitcher;
import React, { useState } from 'react';

const PlanSwitcher = ({ currentPlan, onPlanChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const plans = [
    { 
      id: 'free', 
      name: 'Free', 
      description: '5 queries/day', 
      model: 'gpt-4o-mini',
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gradient-to-r from-gray-400 to-gray-600'
    },
    { 
      id: 'hobbyist', 
      name: 'Hobbyist', 
      description: '100 queries/month', 
      model: 'gpt-4o',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'bg-gradient-to-r from-blue-400 to-cyan-500'
    },
    { 
      id: 'occasional', 
      name: 'Occasional', 
      description: '300 queries/month', 
      model: 'gpt-4o',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-gradient-to-r from-green-400 to-emerald-500'
    },
    { 
      id: 'professional', 
      name: 'Pro', 
      description: '600 queries/month', 
      model: 'gpt-4o',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-r from-purple-400 to-pink-500'
    },
    { 
      id: 'enterprise', 
      name: 'Enterprise', 
      description: '5,000 queries/month', 
      model: 'gpt-4o',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-gradient-to-r from-orange-400 to-red-500'
    }
  ];

  const currentPlanData = plans.find(plan => plan.id === currentPlan);

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-white/10 shadow-2xl relative">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section - Current Plan Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${currentPlanData.bgColor} animate-pulse`}></div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Demo Plan Switcher</h3>
                  <p className="text-xs text-white/60">Currently viewing: <span className="font-medium text-white">{currentPlanData.name} Plan</span></p>
                </div>
              </div>
            </div>

            {/* Right Section - Plan Buttons */}
            <div className="flex items-center space-x-1">
              <span className="text-xs text-white/60 mr-3 font-medium">Switch Plan:</span>
              <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-xl p-1 border border-white/10">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => onPlanChange(plan.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      currentPlan === plan.id
                        ? `bg-gradient-to-r ${plan.color} text-white shadow-lg`
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    title={`${plan.description} • ${plan.model}`}
                  >
                    {plan.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Current Plan Info */}
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${currentPlanData.bgColor} animate-pulse`}></div>
              <div>
                <p className="text-xs text-white/60">Current Plan:</p>
                <p className="text-sm font-semibold text-white">{currentPlanData.name}</p>
              </div>
            </div>

            {/* Plan Buttons - Compact */}
            <div className="flex space-x-1 bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-white/10">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => onPlanChange(plan.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                    currentPlan === plan.id
                      ? `bg-gradient-to-r ${plan.color} text-white shadow-md`
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  title={`${plan.description} • ${plan.model}`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="px-4 py-3">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${currentPlanData.bgColor} animate-pulse`}></div>
              <div>
                <h3 className="text-sm font-semibold text-white">Plan Switcher</h3>
                <p className="text-xs text-white/60">{currentPlanData.name} • {currentPlanData.description}</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isExpanded ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              <svg 
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Expandable Plan Buttons */}
          {isExpanded && (
            <div className="mt-3 space-y-2 animate-in slide-in-from-top duration-300">
              <p className="text-xs text-white/60 font-medium px-1">Select Plan:</p>
              <div className="grid grid-cols-2 gap-2">
                {plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => {
                      onPlanChange(plan.id);
                      setIsExpanded(false);
                    }}
                    className={`p-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                      currentPlan === plan.id
                        ? `bg-gradient-to-r ${plan.color} text-white border-transparent shadow-lg`
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="text-left">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${currentPlan === plan.id ? 'bg-white' : plan.bgColor}`}></div>
                        <span>{plan.name}</span>
                      </div>
                      <p className="text-xs font-normal opacity-80">{plan.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Compact Plan Indicator when collapsed */}
          {!isExpanded && (
            <div className="flex overflow-x-auto pb-2 space-x-2 hide-scrollbar">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => onPlanChange(plan.id)}
                  className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 border ${
                    currentPlan === plan.id
                      ? `bg-gradient-to-r ${plan.color} text-white border-transparent`
                      : 'bg-white/5 text-white/60 border-white/20 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
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
};

export default PlanSwitcher;