// import React, { useState } from 'react';
// import { 
//   Home, 
//   Calendar, 
//   User, 
//   CheckSquare, 
//   DollarSign, 

//   LogOut

// } from 'lucide-react';
// import Logo from "../../assets/logo.png"
// import DashBoard from './DashBoard';
// import ApplyLeave from './ApplyLeave';
// import Profile from './Profile';

// const SideBar = () => {
//   const [activeSection, setActiveSection] = useState('Dashboard');


//   const menuItems = [
//     { name: 'Dashboard', icon: Home, color: 'bg-green-500' },
//     { name: 'Apply Leave', icon: Calendar, color: 'bg-green-500' },
//     { name: 'Profile', icon: User, color: 'bg-green-500' },
//     { name: 'Tasks', icon: CheckSquare, color: 'bg-green-500' },
//     { name: 'Salary', icon: DollarSign, color: 'bg-green-500' }
//   ];





//   const renderContent = () => {
//     switch(activeSection) {
//       case 'Dashboard': return <DashBoard />;
//       case 'Apply Leave': return <ApplyLeave />;
//       case 'Profile': return <Profile />;
//       case 'Tasks': return <DashBoard />;
//       case 'Salary': return <DashBoard />;
//       default: return <DashBoard />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-70 bg-white shadow-xl border-r border-gray-200">
//         <div className="p-6">
//           <div className="flex items-center mb-8">
//             <div className="w-13 h-13 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
//               <img src={Logo} alt="Remove" className="w-8 h-8" />
//             </div>
//             <div>
//               <h1 className="font-bold text-lg text-gray-800">Lankapura Wedamedura</h1>
//               <p className="text-xs text-gray-500">Employee Portal</p>
//             </div>
//           </div>

//           <nav className="space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = activeSection === item.name;
              
//               return (
//                 <button
//                   key={item.name}
//                   onClick={() => setActiveSection(item.name)}
//                   className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 ${
//                     isActive 
//                       ? `${item.color} text-white shadow-lg transform translate-x-1` 
//                       : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
//                   }`}
//                 >
//                   <Icon size={20} className="mr-3" />
//                   <span className="font-medium">{item.name}</span>
//                 </button>
//               );
//             })}
//           </nav>
//         </div>

//         <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
//           <button className="w-full flex items-center px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200">
//             <LogOut size={20} className="mr-3" />
//             <span className="font-medium">Logout</span>
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8 overflow-y-auto">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default SideBar;


import React, { useState } from 'react';
import { Home, Calendar, User, CheckSquare, DollarSign, LogOut } from 'lucide-react';
import Logo from "../../assets/logo.png";
import DashBoard from './DashBoardSection';
import ApplyLeave from './ApplyLeaveSection';
import Profile from './ProfileSection';
import Tasks from './TasksSection';
import Salary from './SalarySection'; // Assuming you have a SalarySection component

const SideBar = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Apply Leave', icon: Calendar },
    { name: 'Profile', icon: User },
    { name: 'Tasks', icon: CheckSquare },
    { name: 'Salary', icon: DollarSign }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard': return <DashBoard />;
      case 'Apply Leave': return <ApplyLeave />;
      case 'Profile': return <Profile />;
      case 'Tasks': return <Tasks />;
      case 'Salary': return <Salary />;
      default: return <DashBoard />;
    }
  };

  return (
    <div className="h-screen bg-[#FAFBF7] text-[#1F2A33] flex">
      {/* Sidebar */}
      <div className="w-70 bg-white shadow-xl border-r border-[#E7EAE3] h-screen flex flex-col overflow-hidden">
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="flex items-center mb-8">
            <div className="w-13 h-13 bg-gradient-to-br from-[#2E7D32] to-[#81C784] rounded-lg flex items-center justify-center mr-3">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-[#2B333B]">Lankapura Wedamedura</h1>
              <p className="text-xs text-[#667078]">Employee Portal</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.name)}
                  className={[
                    "w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-[#2E7D32] to-[#81C784] text-white shadow-lg translate-x-1"
                      : "text-[#33424F] hover:bg-[#EAF5EA] hover:text-[#1F2A33] border border-transparent hover:border-[#CDE7CF]"
                  ].join(" ")}
                >
                  <Icon size={20} className={isActive ? "mr-3" : "mr-3 text-[#2B333B]"} />
                  <span className="font-medium">{item.name}</span>
                  {item.name === 'Dashboard' && (
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#FFD54F] text-[#2B333B]">
                      Live
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

  <div className="p-6 border-t border-[#E7EAE3]">
          <button className="w-full flex items-center px-4 py-3 rounded-xl text-[#B23B3B] hover:bg-red-50 transition-all duration-200">
            <LogOut size={20} className="mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
  <div className="flex-1 h-screen p-8 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default SideBar;
