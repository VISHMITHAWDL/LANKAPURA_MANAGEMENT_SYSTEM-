


// import React, { useState } from 'react';
// import { 
//   BarChart3, 
//   CreditCard, 
//   Wallet, 
//   FileText, 
//   Building2, 
//   Settings, 
//   LogOut,
//   Bell
// } from 'lucide-react';
// import Uploadphoto from '../../assets/upload_area.png';
// import RemoveProfile from '../../assets/dustbin.png';

// const ExpenseSidebar = () => {
//   const [activeItem, setActiveItem] = useState('Expenses');
//   const [profile, setProfile] = useState(null);
//   const [notifications] = useState(4);

//   const menuItems = [
//     { name: 'Dashboard', icon: BarChart3, path: '/dashboard' },
//     { name: 'Expenses', icon: CreditCard, path: '/expenses' },
//     { name: 'Wallets', icon: Wallet, path: '/wallets' },
//     { name: 'Summary', icon: FileText, path: '/summary' },
//     { name: 'Accounts', icon: Building2, path: '/accounts' },
//     { name: 'Settings', icon: Settings, path: '/settings' }
//   ];

//   const handleMenuClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   const handleRemoveProfile = () => {
//     setProfile(null);
   
//     const fileInput = document.getElementById('Profile');
//     if (fileInput) {
//       fileInput.value = '';
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       <nav className="w-72 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-2xl">
//         {/* Profile Section */}
//         <div className="flex items-center mb-10 relative">
//           <div className="relative">
            // <label htmlFor='Profile' className="cursor-pointer">
            //     <img 
            //       className='w-20 h-20 rounded-full object-cover border-2 border-gray-300 hover:border-blue-400 transition-all duration-300' 
            //       src={!profile ? Uploadphoto : URL.createObjectURL(profile)} 
            //       alt=""
            //     />
            //     <input 
            //       onChange={(e)=>setProfile(e.target.files[0])} 
            //       type="file" 
            //       id='Profile' 
            //       accept="image/*"
            //       hidden 
            //     />
                
                
            // </label>
                        
            // {profile && (
            //   <button
            //     onClick={handleRemoveProfile}
            //     className="absolute -bottom-1 -right-1 bg-white hover:bg-gray-100 rounded-full p-1 shadow-lg transition-all duration-300"
            //     title="Remove profile picture"
            //   >
            //     <img src={RemoveProfile} alt="Remove" className="w-4 h-4" />
            //   </button>
            // )}
            
            
            
//             {notifications > 0 && (
//               <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
//                 {notifications}
//               </div>
//             )}
//           </div>
//           <div className="ml-4">
            
//             <h2 className="text-xl font-semibold text-white">Samantha</h2>
//             <p className="text-gray-400 text-sm">samantha@email.com</p>
//           </div>
//         </div>

    
//         <ul className="space-y-2">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeItem === item.name;
            
//             return (
//               <li key={item.name}>
//                 <button
//                   onClick={() => handleMenuClick(item.name)}
//                   className={`
//                     w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-300 group
//                     ${isActive 
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform translate-x-1' 
//                       : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:transform hover:translate-x-1'
//                     }
//                   `}
//                 >
//                   <Icon 
//                     size={20} 
//                     className={`mr-3 transition-transform duration-300 ${
//                       isActive ? 'scale-110' : 'group-hover:scale-110'
//                     }`} 
//                   />
//                   <span className="font-medium">{item.name}</span>
//                 </button>
//               </li>
//             );
//           })}
//         </ul>

     
//         <div className="mt-auto pt-8 border-t border-gray-700">
//           <button className="w-full flex items-center px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300 group hover:transform hover:translate-x-1">
//             <LogOut 
//               size={20} 
//               className="mr-3 transition-transform duration-300 group-hover:scale-110" 
//             />
//             <span className="font-medium">Logout</span>
//           </button>
//         </div>

     
//         <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-gray-400 text-sm">Total Spent</span>
//             <Bell size={16} className="text-gray-400" />
//           </div>
//           <div className="text-white font-bold text-lg">$3,578.80</div>
//           <div className="text-green-400 text-xs mt-1">↓ 12% from last month</div>
//         </div>
//       </nav>

     
//       <div className="flex-1 bg-gray-100 p-8">
//         <div className="max-w-4xl">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">
//             {activeItem}
//           </h1>
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <p className="text-gray-600">
//               Welcome to the {activeItem.toLowerCase()} section. This is where your {activeItem.toLowerCase()} content would be displayed.
//             </p>
            
//             {activeItem === 'Expenses' && (
//               <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//                   <h3 className="font-semibold text-blue-800">Food & Drinks</h3>
//                   <p className="text-2xl font-bold text-blue-600">$872.40</p>
//                 </div>
//                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
//                   <h3 className="font-semibold text-purple-800">Shopping</h3>
//                   <p className="text-2xl font-bold text-purple-600">$1,378.20</p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg border border-green-200">
//                   <h3 className="font-semibold text-green-800">Housing</h3>
//                   <p className="text-2xl font-bold text-green-600">$928.50</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseSidebar;


import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  User, 
  CheckSquare, 
  DollarSign, 
  Leaf, 
  Bell,
  LogOut,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  TrendingUp,
  AlertCircle,
  Plus,
  Eye
} from 'lucide-react';
import Logo from "../../assets/logo.png"

const ClaudeSidebar = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');
//   const [leaveForm, setLeaveForm] = useState({
//     startDate: '',
//     endDate: '',
//     reason: '',
//     type: 'sick'
//   });

  const menuItems = [
    { name: 'Dashboard', icon: Home, color: 'bg-green-500' },
    { name: 'Apply Leave', icon: Calendar, color: 'bg-blue-500' },
    { name: 'Profile', icon: User, color: 'bg-purple-500' },
    { name: 'Tasks', icon: CheckSquare, color: 'bg-orange-500' },
    { name: 'Salary', icon: DollarSign, color: 'bg-emerald-500' }
  ];

  const tasks = [
    { id: 1, title: 'Check herbal inventory', status: 'pending', priority: 'high', dueDate: '2025-08-08' },
    { id: 2, title: 'Prepare turmeric extract', status: 'in-progress', priority: 'medium', dueDate: '2025-08-09' },
    { id: 3, title: 'Customer consultation - Mrs. Silva', status: 'completed', priority: 'high', dueDate: '2025-08-07' },
    { id: 4, title: 'Update product database', status: 'pending', priority: 'low', dueDate: '2025-08-10' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
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

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Leave Balance</p>
              <p className="text-2xl font-bold text-gray-800">18 days</p>
            </div>
            <Calendar className="text-blue-500" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Tasks</p>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <CheckSquare className="text-orange-500" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month Salary</p>
              <p className="text-2xl font-bold text-gray-800">Rs. 85,000</p>
            </div>
            <DollarSign className="text-green-500" size={32} />
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Performance</p>
              <p className="text-2xl font-bold text-gray-800">95%</p>
            </div>
            <TrendingUp className="text-purple-500" size={32} />
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Leaf className="mr-2 text-green-500" size={20} />
            Recent Activities
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Completed inventory check</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Customer consultation completed</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">New herbal products added</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="mr-2 text-orange-500" size={20} />
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
            <div className="flex items-start p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <Bell className="text-blue-500 mr-2 mt-0.5" size={16} />
              <div className="flex-1">
                <p className="text-sm font-medium">Team meeting scheduled</p>
                <p className="text-xs text-gray-500">Tomorrow at 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLeaveApplication = () => (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Apply for Leave</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                <option value="sick">Sick Leave</option>
                <option value="annual">Annual Leave</option>
                <option value="emergency">Emergency Leave</option>
                <option value="maternity">Maternity Leave</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                <option value="half">Half Day</option>
                <option value="full">Full Day</option>
                <option value="multiple">Multiple Days</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
            <textarea 
              rows="4" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              placeholder="Please provide a detailed reason for your leave request..."
            ></textarea>
          </div>
          
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium">
            Submit Leave Application
          </button>
        </div>
      </div>

      {/* Leave History */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Leave Applications</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <p className="font-medium">Annual Leave</p>
              <p className="text-sm text-gray-600">Dec 15-20, 2024</p>
            </div>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">Approved</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div>
              <p className="font-medium">Sick Leave</p>
              <p className="text-sm text-gray-600">Nov 8, 2024</p>
            </div>
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs">Pending</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Employee Profile</h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
            K
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Kamal Perera</h3>
            <p className="text-gray-600">Senior Herbal Specialist</p>
            <p className="text-green-600 font-medium">Employee ID: HC001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-gray-500 mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">kamal.perera@herbalcenter.lk</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-500 mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">+94 77 123 4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-gray-500 mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium">123, Temple Road, Colombo 03</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="text-gray-500 mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Join Date</p>
                <p className="font-medium">January 15, 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="text-gray-500 mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Department</p>
                <p className="font-medium">Herbal Medicine & Research</p>
              </div>
            </div>
            <div className="flex items-center">
              <User className="text-gray-500 mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Reporting Manager</p>
                <p className="font-medium">Dr. Nimal Silva</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4">Skills & Certifications</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ayurvedic Medicine</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Herbal Consultation</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Quality Control</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Customer Service</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTasks = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Tasks</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
          <Plus size={16} className="mr-2" />
          Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-red-600 mb-4">Pending Tasks</h3>
          <div className="space-y-3">
            {tasks.filter(task => task.status === 'pending').map(task => (
              <div key={task.id} className="p-3 border border-red-200 rounded-lg bg-red-50">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <p className="text-xs text-gray-600 mt-1">Due: {task.dueDate}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                  task.priority === 'high' ? 'bg-red-500 text-white' : 
                  task.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {task.priority} priority
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-orange-600 mb-4">In Progress</h3>
          <div className="space-y-3">
            {tasks.filter(task => task.status === 'in-progress').map(task => (
              <div key={task.id} className="p-3 border border-orange-200 rounded-lg bg-orange-50">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <p className="text-xs text-gray-600 mt-1">Due: {task.dueDate}</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <h3 className="font-semibold text-green-600 mb-4">Completed</h3>
          <div className="space-y-3">
            {tasks.filter(task => task.status === 'completed').map(task => (
              <div key={task.id} className="p-3 border border-green-200 rounded-lg bg-green-50">
                <h4 className="font-medium text-sm">{task.title}</h4>
                <p className="text-xs text-gray-600 mt-1">Due: {task.dueDate}</p>
                <span className="inline-block px-2 py-1 bg-green-500 text-white rounded-full text-xs mt-2">
                  ✓ Complete
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSalary = () => (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Salary Information</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Current Salary</h3>
          <p className="text-3xl font-bold">Rs. 85,000</p>
          <p className="text-sm opacity-80 mt-2">Per Month</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">YTD Earnings</h3>
          <p className="text-3xl font-bold text-gray-800">Rs. 680,000</p>
          <p className="text-sm text-gray-600 mt-2">January - August 2025</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Next Increment</h3>
          <p className="text-3xl font-bold text-gray-800">Dec 2025</p>
          <p className="text-sm text-gray-600 mt-2">Performance Review</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Salary Breakdown - August 2025</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="font-medium">Basic Salary</span>
            <span className="font-bold">Rs. 60,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <span className="font-medium">Performance Allowance</span>
            <span className="font-bold text-green-600">Rs. 15,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <span className="font-medium">Medical Allowance</span>
            <span className="font-bold text-blue-600">Rs. 5,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
            <span className="font-medium">Transport Allowance</span>
            <span className="font-bold text-orange-600">Rs. 8,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
            <span className="font-medium">Deductions (EPF/ETF)</span>
            <span className="font-bold text-red-600">- Rs. 3,000</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
            <span className="font-bold text-lg">Net Salary</span>
            <span className="font-bold text-lg text-green-600">Rs. 85,000</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
            <Eye size={16} className="mr-2" />
            Download Payslip
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'Dashboard': return renderDashboard();
      case 'Apply Leave': return renderLeaveApplication();
      case 'Profile': return renderProfile();
      case 'Tasks': return renderTasks();
      case 'Salary': return renderSalary();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-70 bg-white shadow-xl border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <div className="w-13 h-13 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <img src={Logo} alt="Remove" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-800">Lankapura Wedamedura</h1>
              <p className="text-xs text-gray-500">Employee Portal</p>
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
                  className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    isActive 
                      ? `${item.color} text-white shadow-lg transform translate-x-1` 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
          <button className="w-full flex items-center px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200">
            <LogOut size={20} className="mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default ClaudeSidebar;