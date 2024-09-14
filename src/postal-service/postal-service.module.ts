import { Module } from '@nestjs/common';
import { PostalServiceService } from './postal-service.service';
import { PostalServiceController } from './postal-service.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ 
    HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  providers: [PostalServiceService],
  controllers: [PostalServiceController]
})
export class PostalServiceModule {}
