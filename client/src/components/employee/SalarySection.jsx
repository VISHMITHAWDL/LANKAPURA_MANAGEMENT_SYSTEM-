import React from 'react'
import { 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  Download, 
  Eye, 
  PiggyBank, 
  CreditCard,
  Receipt,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

const SalarySection = () => {
  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Salary Information</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Current Salary</h3>
            <DollarSign size={24} />
          </div>
          <p className="text-3xl font-bold">Rs. 85,000</p>
          <p className="text-sm opacity-80 mt-2">Per Month</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">YTD Earnings</h3>
            <TrendingUp size={24} className="text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800">Rs. 680,000</p>
          <p className="text-sm text-gray-600 mt-2">January - August 2025</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Next Increment</h3>
            <Calendar size={24} className="text-purple-500" />
          </div>
          <p className="text-3xl font-bold text-gray-800">Dec 2025</p>
          <p className="text-sm text-gray-600 mt-2">Performance Review</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <Receipt size={20} className="text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold">Salary Breakdown - August 2025</h3>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center">
              <CreditCard size={16} className="text-gray-600 mr-2" />
              <span className="font-medium">Basic Salary</span>
            </div>
            <span className="font-bold">Rs. 60,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <CheckCircle size={16} className="text-green-600 mr-2" />
              <span className="font-medium">Performance Allowance</span>
            </div>
            <span className="font-bold text-green-600">Rs. 15,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <PiggyBank size={16} className="text-blue-600 mr-2" />
              <span className="font-medium">Medical Allowance</span>
            </div>
            <span className="font-bold text-blue-600">Rs. 5,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
            <div className="flex items-center">
              <CreditCard size={16} className="text-orange-600 mr-2" />
              <span className="font-medium">Transport Allowance</span>
            </div>
            <span className="font-bold text-orange-600">Rs. 8,000</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <AlertCircle size={16} className="text-red-600 mr-2" />
              <span className="font-medium">Deductions (EPF/ETF)</span>
            </div>
            <span className="font-bold text-red-600">- Rs. 3,000</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center p-3 bg-green-100 rounded-lg">
            <div className="flex items-center">
              <DollarSign size={16} className="text-green-600 mr-2" />
              <span className="font-bold text-lg">Net Salary</span>
            </div>
            <span className="font-bold text-lg text-green-600">Rs. 85,000</span>
          </div>
        </div>

        <div className="mt-6">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center">
            <Download size={16} className="mr-2" />
            Download Payslip
          </button>
        </div>
      </div>
    </div>
  )
}

export default SalarySection