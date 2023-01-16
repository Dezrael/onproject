import { createBrowserRouter, Navigate } from 'react-router-dom';
import { EventsPage } from '../pages/EventsPage';
import { LoginPage } from '../pages/LoginPage';

export const publicRouter = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <Navigate to="/login" replace />,
    },
]);

export const privateRouter = createBrowserRouter([
    {
        path: '/',
        element: <EventsPage />,
    },
    {
        path: '/login',
        element: <Navigate to="/" replace />,
    },
]);
