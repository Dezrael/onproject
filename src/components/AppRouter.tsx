import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { router } from '../router';

export const AppRouter = () => {
    return <RouterProvider router={router}></RouterProvider>;
};
