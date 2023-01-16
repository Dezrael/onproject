import { useEffect } from 'react';
import { Divider, Layout } from 'antd';

import { AppRouter } from './components/AppRouter';
import { logout, setUser } from './store/reducers/AuthSlice';

import './App.css';
import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useAppDispatch';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            dispatch(setUser(localStorage.getItem('username') || ''));
        }
    }, []);

    return (
        <Layout>
            <AppRouter />
        </Layout>
    );
}

export default App;
