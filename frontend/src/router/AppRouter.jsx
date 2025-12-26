import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import HomeLayout from '../layout/HomeLayout';
import Songs from '../pages/Songs';
import Playlist from '../pages/Playlist';
import PublicRoute from '../components/PublicRoute';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoute />,
            children: [
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/register",
                    element: <Register />
                }
            ]
        },
        {
            path: "/home",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <HomeLayout />,
                    children: [
                        {
                            index: true,
                            element: <Songs />
                        }
                    ]
                }
            ]
        },
        {
            path: "/playlist",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <HomeLayout />,
                    children: [
                        {
                            index: true,
                            element: <Playlist />
                        }
                    ]
                }
            ]
        }
    ])



    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter