import { useEffect } from 'react';
import { Layout } from 'antd';

import { AppRouter } from './components/AppRouter';
import { setUser } from './store/reducers/AuthSlice';

import './App.css';
import { useAppDispatch } from './hooks/useAppDispatch';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            dispatch(setUser(localStorage.getItem('username') || ''));
        }
    }, [dispatch]);

    return (
        <Layout>
            <AppRouter />
        </Layout>
    );
}

export default App;
