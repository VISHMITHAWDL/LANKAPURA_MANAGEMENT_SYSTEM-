import React from 'react'
import { 
  Calendar, 
  Clock, 
  FileText, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User,
  CalendarDays
} from 'lucide-react'

const ApplyLeave = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-[#1F2A33] flex items-center">
        <FileText className="mr-3 text-[#2E7D32]" size={28} />
        Apply for Leave
      </h2>
      
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="mr-2" size={16} />
                Leave Type
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32]">
                <option value="sick">Sick Leave</option>
                <option value="annual">Annual Leave</option>
                <option value="emergency">Emergency Leave</option>
                <option value="maternity">Maternity Leave</option>
              </select>
            </div>
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Clock className="mr-2" size={16} />
                Duration
              </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32]">
                <option value="half">Half Day</option>
                <option value="full">Full Day</option>
                <option value="multiple">Multiple Days</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Calendar className="mr-2" size={16} />
                Start Date
              </label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32]" />
            </div>
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <CalendarDays className="mr-2" size={16} />
                End Date
              </label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32]" />
            </div>
          </div>
          
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <FileText className="mr-2" size={16} />
              Reason
            </label>
            <textarea 
              rows="4" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E7D32]"
              placeholder="Please provide a detailed reason for your leave request..."
            ></textarea>
          </div>
          
          <button className="w-full bg-[#2E7D32] text-white py-3 rounded-lg hover:bg-[#256528] transition-colors font-medium flex items-center justify-center">
            <Send className="mr-2" size={20} />
            Submit Leave Application
          </button>
        </div>
      </div>

      {/* Leave History */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Calendar className="mr-2 text-[#2E7D32]" size={20} />
          Recent Leave Applications
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-[#EAF5EA] rounded-lg">
            <div>
              <p className="font-medium">Annual Leave</p>
              <p className="text-sm text-gray-600">Dec 15-20, 2024</p>
            </div>
            <span className="px-3 py-1 bg-[#2E7D32] text-white rounded-full text-xs flex items-center">
              <CheckCircle className="mr-1" size={12} />
              Approved
            </span>
          </div>
          <div className="flex items-center justify-between p-4 bg-[#FFF9E1] rounded-lg">
            <div>
              <p className="font-medium">Sick Leave</p>
              <p className="text-sm text-gray-600">Nov 8, 2024</p>
            </div>
            <span className="px-3 py-1 bg-[#FFD54F] text-white rounded-full text-xs flex items-center">
              <AlertCircle className="mr-1" size={12} />
              Pending
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyLeave
