import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from './checking-account.service';
import {  AccountType } from './models/accounts.model';
import { CheckingAccount } from './models/checking-account';

@Controller('checking')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get()
  findAll(): CheckingAccount[] {
    return this.accountService.findAll();
  }
  @Post()
  createAccount(
    @Body('clientId') clientId: number,
    @Body('accountType') accountType: AccountType,
    @Body('balance') balance: number,
    @Body('transactions') transactions: string,
    @Body('createdAt') createdAt: Date,
    @Body('updateAt') updateAtAt: Date,
    @Body('overdraft') overdraft: 500,
  ): CheckingAccount {
    return this.accountService.createAccount(
      clientId,
      accountType,
      balance,
      transactions,
      createdAt,
      updateAtAt,
      overdraft,
    );
  }

  @Patch(':id')
  updateBalance(
    @Param('id') id: number,
    @Body('balance') newBalance: number,
  ): CheckingAccount {
    return this.accountService.updateBalance(id, newBalance);
  }

  @Patch(':id/account')
  updateAccounType(
    @Param('id') id: number,
    @Body('accountType') accountType: AccountType,
  ): CheckingAccount {
    return this.accountService.updateAccounType(id, accountType);
  }

  @Delete(':id')
  removeAccount(@Param('id', ParseIntPipe) id: number): void {
    return this.accountService.removeAccount(id);
  }
}
