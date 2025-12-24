import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from '../components/Login';
import Register from '../components/Register';
import HomeLayout from '../layout/HomeLayout';
import Songs from '../pages/Songs';

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/home",
            element: <HomeLayout />,
            children: [
                {
                    index: true,
                    element: <Songs />
                }
            ]
        }
    ])



    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter