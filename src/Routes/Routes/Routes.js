import { createBrowserRouter } from "react-router-dom";
import DashBoardLayOut from "../../Layout/DashBoardLayOut";
import Main from "../../Layout/Main";
import Blog from "../../Others/Blog/Blog";
import AllBuyers from "../../Pages/DashBoard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/DashBoard/AllSellers/AllSellers";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import Dashboard from "../../Pages/DashBoard/Dashboard";
import Payment from "../../Pages/DashBoard/Pament/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrder from "../../Pages/Products/MyOrder/MyOrder";
import Products from "../../Pages/Products/Products/Products";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myorder',
                element: <MyOrder></MyOrder>
            }
        ]
    },
    // admin part
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [

            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }

        ]
    }
]);
export default router;