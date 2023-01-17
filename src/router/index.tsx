import { createBrowserRouter, Navigate } from 'react-router-dom';
import { HomeLayout } from '../components/HomeLayout';
import { PrivateLayout } from '../components/PrivateLayout';
import { GanttPage } from '../pages/GanttPage';
import { LoginPage } from '../pages/LoginPage';
import { NetworkGraphPage } from '../pages/NetworkGraphPage';
import { ReportsPage } from '../pages/ReportsPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { TasksPage } from '../pages/TasksPage';

export const router = createBrowserRouter([
    {
        element: <HomeLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: '/',
                element: <Navigate to="/login" />,
            },
        ],
    },
    {
        path: '/app',
        element: <PrivateLayout />,
        children: [
            {
                path: 'gantt',
                element: <GanttPage />,
            },
            {
                path: 'network',
                element: <NetworkGraphPage />,
            },
            {
                path: 'tasks',
                element: <TasksPage />,
            },
            {
                path: 'resources',
                element: <ResourcesPage />,
            },
            {
                path: 'reports',
                element: <ReportsPage />,
            },
        ],
    },
]);
