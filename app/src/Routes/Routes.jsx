import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/Layout/Main";
import Home from "../components/Pages/Home/Home";
import Menu from "../components/Pages/Menu/Menu";
import Order from "../components/Pages/Order/Order";
import Auth from "../components/Layout/Auth";
import Login from "../components/Pages/Auth/Login";
import Register from "../components/Pages/Auth/Register";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoutes><Main></Main></ProtectedRoutes>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            }
        ]
    },
    {
        path: '/about',
        element: <h1>Hello World</h1>
    },
    {
        path: '/auth',
        element: <Auth />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default router;