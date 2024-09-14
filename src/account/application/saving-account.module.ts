import { Module } from '@nestjs/common';
import { SavingAccountController } from '../presenter/http/saving-account.controller';
import { SavingAccountService } from './saving-account.service';
import { AccountService } from './checking-account.service';

@Module({
  controllers: [SavingAccountController],
  providers: [AccountService, SavingAccountService],
})
export class SavingAccountModule {}
