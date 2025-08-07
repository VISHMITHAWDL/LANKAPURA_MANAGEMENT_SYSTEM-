import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.jsx';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './Routes.jsx';


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  )
}

export default App;
