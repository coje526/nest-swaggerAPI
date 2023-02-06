import { login } from './dto/create-user.dto';
export declare class AppService {
    users: {
        id: number;
        userAccount: string;
        userPassword: string;
    }[];
    login(data: login): boolean;
    getAllUser(): {
        id: number;
        userAccount: string;
        userPassword: string;
    }[];
    getById(id: string): {
        id: number;
        userAccount: string;
        userPassword: string;
    };
}
