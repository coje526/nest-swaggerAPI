import { AppService } from './app.service';
import { login } from './dto/create-user.dto';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    login(data: login, response: Response): Response<any, Record<string, any>>;
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
