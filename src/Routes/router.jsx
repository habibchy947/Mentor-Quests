import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ServiceDetail from "../Pages/ServiceDetail";

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
            }
        ]
    }
])

export default router;