import { Module } from '@nestjs/common';
import { ClientAccountService } from './client.service';
import { ClientAccountController } from './client.controller';

@Module({
  providers: [ClientAccountService],
  controllers: [ClientAccountController],
})
export class ClientAccountModule {}
