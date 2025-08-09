// import React from 'react'
// import { 
//   Clock, 
//   MapPin, 
//   Calendar, 
//   CheckSquare, 
//   DollarSign, 
//   TrendingUp, 
//   Leaf, 
//   Bell, 
//   AlertCircle 
// } from 'lucide-react';

// const DashBoard = () => {



//   return (
//     <div className="space-y-6">
     
//       <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
//         <h2 className="text-2xl font-bold mb-2">Welcome back, Kamal!</h2>
//         <p className="opacity-90">Have a productive day at Green Valley Herbal Center</p>
//         <div className="mt-4 flex items-center space-x-4">
//           <div className="flex items-center">
//             <Clock size={16} className="mr-2" />
//             <span className="text-sm">Today: 8:00 AM - 5:00 PM</span>
//           </div>
//           <div className="flex items-center">
//             <MapPin size={16} className="mr-2" />
//             <span className="text-sm">Colombo Branch</span>
//           </div>
//         </div>
//       </div>

   
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-blue-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Leave Balance</p>
//               <p className="text-2xl font-bold text-gray-800">18 days</p>
//             </div>
//             <Calendar className="text-blue-500" size={32} />
//           </div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-orange-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Pending Tasks</p>
//               <p className="text-2xl font-bold text-gray-800">5</p>
//             </div>
//             <CheckSquare className="text-orange-500" size={32} />
//           </div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">This Month Salary</p>
//               <p className="text-2xl font-bold text-gray-800">Rs. 85,000</p>
//             </div>
//             <DollarSign className="text-green-500" size={32} />
//           </div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-purple-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-600">Performance</p>
//               <p className="text-2xl font-bold text-gray-800">95%</p>
//             </div>
//             <TrendingUp className="text-purple-500" size={32} />
//           </div>
//         </div>
//       </div>

      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl p-6 shadow-lg">
//           <h3 className="text-lg font-semibold mb-4 flex items-center">
//             <Leaf className="mr-2 text-green-500" size={20} />
//             Recent Activities
//           </h3>
//           <div className="space-y-3">
//             <div className="flex items-center p-3 bg-green-50 rounded-lg">
//               <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
//               <div className="flex-1">
//                 <p className="text-sm font-medium">Completed inventory check</p>
//                 <p className="text-xs text-gray-500">2 hours ago</p>
//               </div>
//             </div>
//             <div className="flex items-center p-3 bg-blue-50 rounded-lg">
//               <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
//               <div className="flex-1">
//                 <p className="text-sm font-medium">Customer consultation completed</p>
//                 <p className="text-xs text-gray-500">4 hours ago</p>
//               </div>
//             </div>
//             <div className="flex items-center p-3 bg-orange-50 rounded-lg">
//               <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
//               <div className="flex-1">
//                 <p className="text-sm font-medium">New herbal products added</p>
//                 <p className="text-xs text-gray-500">Yesterday</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl p-6 shadow-lg">
//           <h3 className="text-lg font-semibold mb-4 flex items-center">
//             <Bell className="mr-2 text-orange-500" size={20} />
//             Notifications
//           </h3>
//           <div className="space-y-3">
//             <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
//               <AlertCircle className="text-red-500 mr-2 mt-0.5" size={16} />
//               <div className="flex-1">
//                 <p className="text-sm font-medium">Low stock alert: Gotu Kola</p>
//                 <p className="text-xs text-gray-500">Requires immediate attention</p>
//               </div>
//             </div>
//             <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
//               <Bell className="text-blue-500 mr-2 mt-0.5" size={16} />
//               <div className="flex-1">
//                 <p className="text-sm font-medium">Team meeting scheduled</p>
//                 <p className="text-xs text-gray-500">Tomorrow at 10:00 AM</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default DashBoard


import React from 'react'
import { 
  Clock, 
  MapPin, 
  Calendar, 
  CheckSquare, 
  DollarSign, 
  TrendingUp, 
  Leaf, 
  Bell, 
  AlertCircle 
} from 'lucide-react';

const DashBoard = () => {
  return (
    <div className="space-y-6">
     
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#2E7D32] to-[#81C784] rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Kamal!</h2>
        <p className="opacity-90">Have a productive day at Green Valley Herbal Center</p>
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">Today: 8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex items-center">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">Colombo Branch</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#81C784]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Leave Balance</p>
              <p className="text-2xl font-bold text-gray-800">18 days</p>
            </div>
            <Calendar className="text-[#81C784]" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#FFD54F]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Tasks</p>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <CheckSquare className="text-[#FFD54F]" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#2E7D32]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month Salary</p>
              <p className="text-2xl font-bold text-gray-800">Rs. 85,000</p>
            </div>
            <DollarSign className="text-[#2E7D32]" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-[#A1887F]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Performance</p>
              <p className="text-2xl font-bold text-gray-800">95%</p>
            </div>
            <TrendingUp className="text-[#A1887F]" size={32} />
          </div>
        </div>
      </div>

      {/* Activities & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Leaf className="mr-2 text-[#2E7D32]" size={20} />
            Recent Activities
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-[#EAF5EA] rounded-lg">
              <div className="w-2 h-2 bg-[#2E7D32] rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completed inventory check</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-[#F1F8E9] rounded-lg">
              <div className="w-2 h-2 bg-[#81C784] rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Customer consultation completed</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-[#FFF9E1] rounded-lg">
              <div className="w-2 h-2 bg-[#FFD54F] rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New herbal products added</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="mr-2 text-[#FFD54F]" size={20} />
            Notifications
          </h3>
          <div className="space-y-3">
            <div className="flex items-start p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
              <AlertCircle className="text-red-500 mr-2 mt-0.5" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">Low stock alert: Gotu Kola</p>
                <p className="text-xs text-gray-500">Requires immediate attention</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-[#EAF5EA] rounded-lg border-l-4 border-[#81C784]">
              <Bell className="text-[#81C784] mr-2 mt-0.5" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">Team meeting scheduled</p>
                <p className="text-xs text-gray-500">Tomorrow at 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
