import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './Routes.jsx';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={AppRouter} />
    </Provider>
  )
}

export default App;
