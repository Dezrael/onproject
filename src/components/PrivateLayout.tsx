import { Navigate, useLocation, useOutlet } from 'react-router';
import { useAppSelector } from '../hooks/useAppSelector';

export const PrivateLayout = () => {
    const { isAuth } = useAppSelector((state) => state.authReducer);
    const outlet = useOutlet();

    const location = useLocation();

    console.log('Авторизация: ' + isAuth);
    console.log('Слой приватный: ' + location.pathname);

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <>{outlet}</>;
};
