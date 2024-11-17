import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        errorElement: <ErrorPage></ErrorPage> ,
        element:<MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/profile',
                element: <h2>Profile</h2>
            }
        ]
    }
])

export default router;