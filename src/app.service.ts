import { Injectable } from '@nestjs/common';
import { login } from './dto/create-user.dto';

@Injectable()
export class AppService {
 
  users = [
    {
      id: 1,
      userAccount: 'abcd1234',
      userPassword: "false",
    },
  ];

  login(data: login) {
    if(data.userAccount == "nick"){
      return true;
    }else{
      return false;
    }
  }

  getAllUser() {
    return this.users;
  }
 
  getById(id: string) {
    return this.users.find((user) => user.id.toString() === id);
  }


}

