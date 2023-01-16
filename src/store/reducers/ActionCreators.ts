import { IUser } from '../../models/IUser';
import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../api/UserService';

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await UserService.getUsers();
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
});

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ username, password }: IUser, thunkAPI) => {
        try {
            const user = await UserService.login(username, password);
            return user;
        } catch (e) {
            return thunkAPI.rejectWithValue('Введён неверный логин или пароль');
        }
    },
);
