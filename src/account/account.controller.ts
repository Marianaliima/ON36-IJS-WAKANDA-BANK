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
import { AccountService } from './account.service';
import { Account, AccountType } from './models/account.interface';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get()
  findAll(): Account[] {
    return this.accountService.findAll();
  }
  @Post()
  createAccount(
    @Body('clientId') clientId: number,
    @Body('accountType') accountType: AccountType,
    @Body('balance') balance: number,
    @Body('overdraft') overdraft: number,
    @Body('transactions') transactions: string,
    @Body('createdAt') createdAt: Date,
    @Body('updateAt') updateAtAt: Date,
  ): Account {
    return this.accountService.createAccount(
      clientId,
      accountType,
      balance,
      overdraft,
      createdAt,
      updateAtAt,
      transactions,
    );
  }

  @Patch(':id')
  updateBalance(
    @Param('id') id: number,
    @Body('balance') newBalance: number,
  ): Account {
    return this.accountService.updateBalance(id, newBalance);
  }

  @Patch(':id/account')
  updateAccounType(
    @Param('id') id: number,
    @Body('accountType') accountType: AccountType,
  ): Account {
    return this.accountService.updateAccounType(id, accountType);
  }

  @Delete(':id')
  removeAccount(@Param('id', ParseIntPipe) id: number): void {
    return this.accountService.removeAccount(id);
  }
}
