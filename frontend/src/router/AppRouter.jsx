import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from '../components/Login';
import Register from '../components/Register';
import HomeLayout from '../layout/HomeLayout';
import Songs from '../pages/Songs';
import Playlist from '../pages/Playlist';

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
        },
        {
            path: "/playlist",
            element: <HomeLayout />,
            children: [
                {
                    index:true,
                    element: <Playlist />
                }
            ]
        }
    ])



    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter