import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

const navigate = useNavigate();
const handleLogin = () => {
  navigate('/login');
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome to Lankapura Management System</h1>
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Home
