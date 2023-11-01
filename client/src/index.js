import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './views/Login/Login';
import Signup from './views/SingUpUser/Singup';
import Home from './views/Home/Home';
import "./index.css"
import MyOrders from './views/MyOrders/MyOrders';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([

    {
        path: '/',
        element: <Home />
    },

    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/orders',
        element: <MyOrders />
    }
  
])

root.render(<RouterProvider router={router} />);