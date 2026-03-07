import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CatagoryNews from "../pages/CatagoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRouter from "../provider/PrivateRouter";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path: "",
                element:<Home></Home>,
            },
            {
                path: "/category/:id",
                element:<CatagoryNews></CatagoryNews>,
                loader: () => 
                    fetch("/news.json"),
                hydrateFallbackElement: <Loading></Loading>,
                
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
         children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
             {
                path: "/auth/register",
                element: <Register></Register>,
            }
         ]
    },
    {
        path: "/news-details/:id",
        element: 
        <PrivateRouter>
            <NewsDetails></NewsDetails>
        </PrivateRouter>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
    },
    {
        path: "/*",
        element: <h2> Error404</h2>,
    },
]);
export default router;