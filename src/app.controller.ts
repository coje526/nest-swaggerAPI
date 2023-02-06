import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { ApiHeader, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AppService} from './app.service';
import { login } from './dto/create-user.dto';
import { Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'OK'})
  @ApiResponse({ status: 400, description: 'Not Found'})
  @ApiResponse({ status: 403, description: 'Forbidden'})
  login(@Body() data: login, @Res() response: Response) {
    if (this.appService.login(data)){
      return response.status(HttpStatus.OK).send("Good");
    }else{
      return response.status(HttpStatus.BAD_REQUEST).send("NOT GOOD");
    }
   
  }

  @Get('users')
  @ApiResponse({ status: 200, description: 'The record is successfully created'})
  @ApiHeader({
    name: 'Authorization',
    description: 'Authorization token'
  })
  getAllUser() {
    return this.appService.getAllUser();
  }
 
  @Get('user/:id')
  @ApiResponse({ status: 200, description: 'The record is successfully created'})
  @ApiHeader({
    name: 'Authorization',
    description: 'Authorization token'
  })
  getById(@Param('id') id: string) {
    return this.appService.getById(id);
  }
  
}

