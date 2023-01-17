import { IUser } from './IUser';
import { ResourceCategory } from './Resources';

export interface IResource {
    owner: IUser;
    name: string;
    categoty: ResourceCategory;
    shortName: string;
    rate: string;
    usageCost: string;
}
