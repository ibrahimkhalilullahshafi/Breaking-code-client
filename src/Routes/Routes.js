import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Course from "../components/Pages/Course/Course";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/course/:id",
                element: <Course></Course>,
            }
        ]
    }
])