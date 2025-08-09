// import React from 'react'
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Calendar, 
//   Award, 
//   User,
//   Edit,
//   Settings
// } from 'lucide-react'
// import Uploadphoto from '../../assets/upload_area.png';
// import RemoveProfile from '../../assets/dustbin.png';
// import { useState } from 'react';

// const Profile = () => {

//   const [profile, setProfile] = useState(null);

//   const handleRemoveProfile = () => {
//     setProfile(null);
   
//     const fileInput = document.getElementById('Profile');
//     if (fileInput) {
//       fileInput.value = '';
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-800 flex items-center">
//           <User className="mr-3 text-green-500" size={28} />
//           Employee Profile
//         </h2>
//         <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
//           <Edit className="mr-2" size={16} />
//           Edit Profile
//         </button>
//       </div>
      
//       <div className="bg-white rounded-xl shadow-lg p-6">
//         <div className="flex items-center mb-6">
//           <div className="relative mr-6">
//             <label htmlFor='Profile' className="cursor-pointer">
//                 <img 
//                   className='w-20 h-20 rounded-full object-cover border-2 border-gray-300 hover:border-blue-400 transition-all duration-300' 
//                   src={!profile ? Uploadphoto : URL.createObjectURL(profile)} 
//                   alt=""
//                 />
//                 <input 
//                   onChange={(e)=>setProfile(e.target.files[0])} 
//                   type="file" 
//                   id='Profile' 
//                   accept="image/*"
//                   hidden 
//                 />
//             </label>
//             {profile && (
//               <button
//                 onClick={handleRemoveProfile}
//                 className="absolute -bottom-1 -right-1 bg-white hover:bg-gray-100 rounded-full p-1 shadow-lg transition-all duration-300 border border-gray-300"
//                 title="Remove profile picture"
//               >
//                 <img src={RemoveProfile} alt="Remove" className="w-4 h-4" />
//               </button>
//             )}
//           </div>

             
//           <div>
//             <h3 className="text-2xl font-bold text-gray-800">Kamal Perera</h3>
//             <p className="text-gray-600">Senior Herbal Specialist</p>
//             <p className="text-green-600 font-medium">Employee ID: HC001</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <Mail className="text-gray-500 mr-3" size={20} />
//               <div>
//                 <p className="text-sm text-gray-600">Email</p>
//                 <p className="font-medium">kamal.perera@herbalcenter.lk</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Phone className="text-gray-500 mr-3" size={20} />
//               <div>
//                 <p className="text-sm text-gray-600">Phone</p>
//                 <p className="font-medium">+94 77 123 4567</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="text-gray-500 mr-3" size={20} />
//               <div>
//                 <p className="text-sm text-gray-600">Address</p>
//                 <p className="font-medium">123, Temple Road, Colombo 03</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <Calendar className="text-gray-500 mr-3" size={20} />
//               <div>
//                 <p className="text-sm text-gray-600">Join Date</p>
//                 <p className="font-medium">January 15, 2020</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <Award className="text-gray-500 mr-3" size={20} />
//               <div>
//                 <p className="text-sm text-gray-600">Department</p>
//                 <p className="font-medium">Herbal Medicine & Research</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <User className="text-gray-500 mr-3" size={20} />
//               <div>
//                 <p className="text-sm text-gray-600">Reporting Manager</p>
//                 <p className="font-medium">Dr. Nimal Silva</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <h4 className="text-lg font-semibold mb-4 flex items-center">
//             <Award className="mr-2 text-green-500" size={20} />
//             Skills & Certifications
//           </h4>
//           <div className="flex flex-wrap gap-2">
//             <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ayurvedic Medicine</span>
//             <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Herbal Consultation</span>
//             <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Quality Control</span>
//             <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Customer Service</span>
//           </div>
//         </div>

//         <div className="mt-6 pt-6 border-t border-gray-200">
//           <h4 className="text-lg font-semibold mb-4 flex items-center">
//             <Settings className="mr-2 text-gray-500" size={20} />
//             Account Settings
//           </h4>
//           <div className="flex flex-wrap gap-3">
//             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
//               Change Password
//             </button>
//             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
//               Privacy Settings
//             </button>
//             <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
//               Notification Preferences
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Profile




import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  User,
  Edit,
  Settings
} from 'lucide-react'
import Uploadphoto from '../../assets/upload_area.png';
import RemoveProfile from '../../assets/dustbin.png';

const Profile = () => {

  const [profile, setProfile] = useState(null);

  const handleRemoveProfile = () => {
    setProfile(null);
    const fileInput = document.getElementById('Profile');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#1F2A33] flex items-center">
          <User className="mr-3 text-[#2E7D32]" size={28} />
          Employee Profile
        </h2>
        <button className="flex items-center px-4 py-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256528] transition-colors">
          <Edit className="mr-2" size={16} />
          Edit Profile
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="relative mr-6">
            <label htmlFor='Profile' className="cursor-pointer">
                <img 
                  className='w-20 h-20 rounded-full object-cover border-2 border-[#CDE7CF] hover:border-[#81C784] transition-all duration-300' 
                  src={!profile ? Uploadphoto : URL.createObjectURL(profile)} 
                  alt=""
                />
                <input 
                  onChange={(e)=>setProfile(e.target.files[0])} 
                  type="file" 
                  id='Profile' 
                  accept="image/*"
                  hidden 
                />
            </label>
            {profile && (
              <button
                onClick={handleRemoveProfile}
                className="absolute -bottom-1 -right-1 bg-white hover:bg-[#F5F5F5] rounded-full p-1 shadow-lg transition-all duration-300 border border-gray-300"
                title="Remove profile picture"
              >
                <img src={RemoveProfile} alt="Remove" className="w-4 h-4" />
              </button>
            )}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#1F2A33]">Kamal Perera</h3>
            <p className="text-gray-600">Senior Herbal Specialist</p>
            <p className="text-[#2E7D32] font-medium">Employee ID: HC001</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">kamal.perera@herbalcenter.lk</p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-medium">+94 77 123 4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-medium">123, Temple Road, Colombo 03</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Join Date</p>
                <p className="font-medium">January 15, 2020</p>
              </div>
            </div>
            <div className="flex items-center">
              <Award className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Department</p>
                <p className="font-medium">Herbal Medicine & Research</p>
              </div>
            </div>
            <div className="flex items-center">
              <User className="text-[#A1887F] mr-3" size={20} />
              <div>
                <p className="text-sm text-gray-600">Reporting Manager</p>
                <p className="font-medium">Dr. Nimal Silva</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="mr-2 text-[#2E7D32]" size={20} />
            Skills & Certifications
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-[#EAF5EA] text-[#2E7D32] rounded-full text-sm">Ayurvedic Medicine</span>
            <span className="px-3 py-1 bg-[#E3F2FD] text-[#1565C0] rounded-full text-sm">Herbal Consultation</span>
            <span className="px-3 py-1 bg-[#F3E5F5] text-[#6A1B9A] rounded-full text-sm">Quality Control</span>
            <span className="px-3 py-1 bg-[#FFF9E1] text-[#B26A00] rounded-full text-sm">Customer Service</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Settings className="mr-2 text-[#A1887F]" size={20} />
            Account Settings
          </h4>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors text-sm">
              Change Password
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors text-sm">
              Privacy Settings
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-[#FAFBF7] transition-colors text-sm">
              Notification Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
