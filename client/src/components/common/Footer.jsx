
import React from 'react'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left section - Company info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">L</span>
            </div>
            <span className="font-semibold text-gray-800">Lankapura Wedamedura</span>
          </div>
          <p className="text-sm text-gray-600 text-center md:text-left">
            Traditional Ayurvedic Healthcare Solutions
          </p>
        </div>

        {/* Center section - Contact info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Phone size={14} />
            <span>+94 11 234 5678</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={14} />
            <span>info@lankapurawedamedura.lk</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Colombo, Sri Lanka</span>
          </div>
        </div>

        {/* Right section - Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end space-x-1">
            <span>© 2025 Made with</span>
            <Heart size={14} className="text-red-500" />
            <span>for healthcare</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

