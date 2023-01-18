import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store';
import { setUser } from './store/reducers/AuthSlice';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

if (localStorage.getItem('isAuth')) {
    store.dispatch(setUser(localStorage.getItem('username') || ''));
}

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
