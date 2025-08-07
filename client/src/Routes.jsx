// routes/AppRouter.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';


import ManNavigationBar from '../src/components/manager/NavigationBar';
import Footer from '../src/components/common/Footer';
import ManagerHome from '../src/pages/manager/ManagerHome';
import Login from '../src/pages/common/Login';
import Home from '../src/pages/common/Home';
import EMNavigationBar from './components/employee/NavigationBar';
import DcNavigationBar from './components/doctor/NavigationBar';
import Doctor_Home from './pages/doctor/Doctor_Home';
import EmployeeHome from './pages/employee/EmployeeHome';


// ✅ Manager Layout Wrapper (with Navbar + Footer)
function ManagerLayout() {
  return (
    <div>
      <ManNavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

function EmployeeLayout() {
  return (
    <div>
      <EMNavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}


function DoctorLayout() {
  return (
    <div>
      <DcNavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

// 🔐 Protected Route wrapper
function ManagerPrivateRoute() {
  const { token, role } = useSelector((state) => state.auth);
  
  if (!token) return <Navigate to="/login" replace />;
  if (role !== 'manager') return <Navigate to="/login" replace />;
  
  return <Outlet />;
}

function EmployeePrivateRoute() {
  const { token, role } = useSelector((state) => state.auth);
  
  if (!token) return <Navigate to="/login" replace />;
  if (role !== 'employee') return <Navigate to="/login" replace />;

  return <Outlet />;
}


function DoctorPrivateRoute() {
  const { token, role } = useSelector((state) => state.auth);
  
  if (!token) return <Navigate to="/login" replace />;
  if (role !== 'doctor') return <Navigate to="/login" replace />;

  return <Outlet />;
}


// 🛣️ Main router
const AppRouter = createBrowserRouter([
  { path: '/', 
    element: <Home /> 
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <ManagerPrivateRoute />, // 
    children: [
      {
        element: <ManagerLayout />,
        children: [
          {
            path: '/manager-home',
            element: <ManagerHome />
          }
        ]
      }
    ]
  },
  {
    element: <EmployeePrivateRoute />,
    children:[
      {
        element: <EmployeeLayout />,
        children: [
          {
            path: '/employee-home',
            element: <EmployeeHome />
          }]
      }
    ]
  },
  {    element: <DoctorPrivateRoute />,
    children:[
      {        element: <DoctorLayout />,
        children: [
          {
            path: '/doctor-home',
            element: <Doctor_Home />
          }
        ]
      }
    ]
  }
]);

export default AppRouter;
