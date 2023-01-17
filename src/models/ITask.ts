import { IResource } from './IResource';
import { IUser } from './IUser';

export interface ITask {
    owner: IUser;
    name: string;
    duration: number;
    startDate: string;
    endDate: string;
    previousTasks: ITask[];
    resources: IResource[];
}
