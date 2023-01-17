import { Navigate, useOutlet, useLocation } from 'react-router';
import { useAppSelector } from '../hooks/useAppSelector';

export const HomeLayout = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);
    const outlet = useOutlet();

    const location = useLocation();

    console.log('Авторизация: ' + isAuth);
    console.log('Слой паблик: ' + location.pathname);

    if (isAuth) {
        return <Navigate to="/app/gantt" />;
    }

    return <>{outlet}</>;
};
