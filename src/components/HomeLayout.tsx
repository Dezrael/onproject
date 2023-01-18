import { Navigate, useOutlet, useLocation } from 'react-router';
import { useAppSelector } from '../hooks/useAppSelector';

export const HomeLayout = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);
    const outlet = useOutlet();

    if (isAuth) {
        return <Navigate to="/app/gantt" />;
    }

    return <>{outlet}</>;
};
