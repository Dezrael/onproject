import { createBrowserRouter } from 'react-router-dom';
import { EventsPage } from '../pages/EventsPage';
import { LoginPage } from '../pages/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <EventsPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

export default router;
