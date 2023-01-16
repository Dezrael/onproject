import { IUser } from '../../models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLogin } from './ActionCreators';
import { simLogin, simLogout } from '../../utils/authSimulation';

interface AuthSlice {
    isAuth: boolean;
    isLoading: boolean;
    user: IUser;
    error: string;
}

const initialState: AuthSlice = {
    isAuth: false,
    isLoading: false,
    user: {} as IUser,
    error: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<string>) {
            state.isAuth = true;
            state.user.username = action.payload;
        },
        logout(state) {
            state.isAuth = false;
            state.user = {} as IUser;
            simLogout(); //backend simulation
        },
    },
    extraReducers: {
        [userLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
            state.isAuth = true;

            simLogin(action.payload.username); //backend simulation
        },
        [userLogin.pending.type]: (state) => {
            state.isLoading = true;
        },
        [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isAuth = false;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
