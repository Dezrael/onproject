import { createBrowserRouter, Navigate } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import { GanntPage } from '../pages/GanttPage';
import { LoginPage } from '../pages/LoginPage';
import { NetworkGraphPage } from '../pages/NetworkGraphPage';
import { ReportsPage } from '../pages/ReportsPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { TasksPage } from '../pages/TasksPage';

export const createRoutes = (isAuth: boolean) => {
    return createBrowserRouter([
        {
            path: '/',
            element: (
                <PrivateRoute isAuthenticated={isAuth}>
                    <GanntPage />
                </PrivateRoute>
            ),
        },
        {
            path: '/network',
            element: (
                <PrivateRoute isAuthenticated={isAuth}>
                    <NetworkGraphPage />,
                </PrivateRoute>
            ),
        },
        {
            path: '/tasks',
            element: (
                <PrivateRoute isAuthenticated={isAuth}>
                    <TasksPage />,
                </PrivateRoute>
            ),
        },
        {
            path: '/resources',
            element: (
                <PrivateRoute isAuthenticated={isAuth}>
                    <ResourcesPage />,
                </PrivateRoute>
            ),
        },
        {
            path: '/reports',
            element: (
                <PrivateRoute isAuthenticated={isAuth}>
                    <ReportsPage />,
                </PrivateRoute>
            ),
        },
        {
            path: '/login',
            element: isAuth ? <Navigate to="/" replace /> : <LoginPage />,
        },
    ]);
};
