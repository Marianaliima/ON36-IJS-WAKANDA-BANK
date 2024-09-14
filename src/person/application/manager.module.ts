import { Module } from '@nestjs/common';
import { ManagerController } from '../presenter/http/manager.controller';
import { ManagerService } from './manager.service';

@Module({
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
