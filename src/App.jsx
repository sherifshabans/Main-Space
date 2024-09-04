import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

function App() {
 
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    
    },
    {
      path: "/dashboard",
      element: <Dashboard/>,
    
    }
  ])
    

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
