import { Module } from '@nestjs/common';
import { ClientAccountService } from './application/client.service';
import { ClientAccountController } from './presenter/http/client.controller';

@Module({
  providers: [ClientAccountService],
  controllers: [ClientAccountController],
})
export class ClientAccountModule {}
