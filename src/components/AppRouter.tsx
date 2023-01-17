import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { createRoutes } from '../router';

export const AppRouter = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);

    let router = createRoutes(isAuth);

    useEffect(() => {
        router = createRoutes(isAuth);
    }, [isAuth]);

    return <RouterProvider router={router}></RouterProvider>;
};
