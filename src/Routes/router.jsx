import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Components/ForgetPassword";
import MyProfile from "../Pages/MyProfile";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement: <ErrorPage></ErrorPage> ,
        element:<MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader:()=> fetch('/services.json')
            },
            {
                path: '/details/:idx',
                element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute>,
                loader:()=> fetch('/services.json')
            },
            {
                path:'/profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path:'/dashBoard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'/authLayout',
                element:<AuthLayout></AuthLayout>,
                children:[
                    {
                        path:'/authLayout/login',
                        element: <Login></Login>
                    },
                    {
                        path:'/authLayout/register',
                        element: <Register></Register>
                    },
                    {
                        path:'/authLayout/forgetPass',
                        element: <ForgetPassword></ForgetPassword>
                    },
                ]
            },
            
        ]
    }
])

export default router;