import { Subscription } from './subscription';

export class User {
    jwt: string;
    user: any;
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    subscription: Subscription;
}