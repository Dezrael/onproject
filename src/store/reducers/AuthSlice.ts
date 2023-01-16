import { IUser } from '../../models/IUser';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userLogin } from './ActionCreators';

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
    reducers: {},
    extraReducers: {
        [userLogin.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        [userLogin.pending.type]: (state) => {
            state.isLoading = true;
        },
        [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default authSlice.reducer;
