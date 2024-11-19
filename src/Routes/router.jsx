import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";

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
                element:<ServiceDetail></ServiceDetail>,
                loader:()=> fetch('/services.json')
            },
            {
                path:'/profile',
                element: <h2>Profile</h2>
            },
            {
                path:'/about',
                element: <h2>About</h2>
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
                ]
            },
            
        ]
    }
])

export default router;