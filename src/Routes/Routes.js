import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Blog from "../components/Pages/Blog/Blog";
import Checkout from "../components/Pages/Checkout/Checkout";
import Course from "../components/Pages/Course/Course";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/Login/SignUp";
import Terms from "../components/Pages/Login/Terms";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: "/course/:id",
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
            {
                path: "/checkout",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            },
            {
                path: "/terms",
                element: <Terms></Terms>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]
    }
])