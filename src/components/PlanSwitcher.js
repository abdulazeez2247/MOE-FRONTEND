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
// components/PlanSwitcher.js
import React from 'react';

const PlanSwitcher = ({ currentPlan, onPlanChange }) => {
  const plans = [
    { 
      id: 'free', 
      name: 'Free', 
      description: '5 queries/day, gpt-4o-mini',
      badge: 'Free'
    },
    { 
      id: 'hobbyist', 
      name: 'Hobbyist', 
      description: '100 queries/month, gpt-4o',
      badge: '$9/mo'
    },
    { 
      id: 'occasional', 
      name: 'Occasional', 
      description: '300 queries/month, gpt-4o',
      badge: '$20/mo'
    },
    { 
      id: 'professional', 
      name: 'Professional', 
      description: '600 queries/month, gpt-4o',
      badge: '$29/mo'
    },
    { 
      id: 'enterprise', 
      name: 'Enterprise', 
      description: '5,000 queries/month, gpt-4o',
      badge: '$149/mo'
    }
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900">Demo Plan Switcher</h3>
            <p className="text-xs text-gray-500">Switch between user plans to test different experiences</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => onPlanChange(plan.id)}
                className={`group relative px-3 py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                  currentPlan === plan.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                }`}
                title={plan.description}
              >
                <span className="flex items-center space-x-1">
                  <span>{plan.name}</span>
                  <span className={`text-[10px] px-1 py-0.5 rounded ${
                    currentPlan === plan.id
                      ? 'bg-primary-700 text-primary-100'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.badge}
                  </span>
                </span>
                
                {/* Tooltip for mobile */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 hidden md:block">
                  {plan.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Mobile tooltip alternative */}
        <div className="mt-2 md:hidden">
          <p className="text-xs text-gray-600">
            Current: {plans.find(p => p.id === currentPlan)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanSwitcher;