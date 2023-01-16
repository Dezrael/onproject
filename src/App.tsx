import { Layout } from 'antd';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import { setupStore } from './store';

const store = setupStore();

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <RouterProvider router={router}></RouterProvider>
            </Layout>
        </Provider>
    );
}

export default App;
