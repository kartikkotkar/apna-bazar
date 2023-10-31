import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './views/login/login';

import "./index.css"
import SignUpUser from './views/SignUpUser/SignUpUser';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
    },

    {
        path: '/login',
        element: <Login />
    },

    {
        path: '/signup',
        element: <SignUpUser />
    }
])

root.render(<RouterProvider router={router} />);