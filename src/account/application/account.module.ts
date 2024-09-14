import { Module } from '@nestjs/common';
import { AccountService } from './checking-account.service';
import { AccountController } from '../presenter/http/checking-account.controller';
import { SavingAccountService } from './saving-account.service';

@Module({
  controllers: [AccountController],
  providers: [AccountService, SavingAccountService],
})
export class AccountModule {}
