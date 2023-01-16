import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/UsersSlice';
import authReducer from './reducers/AuthSlice';

const rootReducer = combineReducers({
    usersReducer,
    authReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
