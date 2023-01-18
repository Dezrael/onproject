import { Layout } from 'antd';

import { AppRouter } from './components/AppRouter';

import './App.css';
import { NavBar } from './components/NavBar';

function App() {
    return (
        <Layout>
            <Layout.Header>
                <NavBar />
            </Layout.Header>
            <AppRouter />
        </Layout>
    );
}

export default App;
