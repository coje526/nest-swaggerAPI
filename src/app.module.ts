import { Module } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
}
