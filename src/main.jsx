import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Shop from './component/Shop/Shop';
import Home from './component/layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductLoader from './Loaders/CartProductLoader';
import Cheackout from './component/Orders/Cheakout/Cheackout';
import Signup from './component/Signup/Signup';
import Authprovider from './component/Provider/Authprovider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children :[
      {
        path : '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader : cartProductLoader,
      },
      {
        path: '/Inventory',
        element: <Inventory></Inventory>
      },
      {
        path : 'checkOut',
        element : <Cheackout></Cheackout>
      },
     
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path : '/signUp',
        element : <Signup></Signup>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
