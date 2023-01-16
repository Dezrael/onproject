import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { publicRouter, privateRouter } from '../router';

export const AppRouter = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);

    return isAuth ? (
        <RouterProvider router={privateRouter}></RouterProvider>
    ) : (
        <RouterProvider router={publicRouter}></RouterProvider>
    );
};
