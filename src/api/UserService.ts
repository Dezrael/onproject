import axios, { AxiosResponse } from 'axios';
import { IUser } from '../models/IUser';
import { delay } from '../utils/delay';

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        await delay(1000);
        return axios.get<IUser[]>('./users.json');
    }

    static async login(username: string, password: string): Promise<IUser | string> {
        await delay(1000);
        const users = await axios.get<IUser[]>('./users.json');
        const user = users.data.find((u) => u.username === username && u.password === password);
        if (user) {
            return Promise.resolve<IUser>(user);
        }
        return Promise.reject<string>('Введён неверный логин или пароль');
    }
}
