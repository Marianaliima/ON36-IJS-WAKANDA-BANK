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
import { SavingsAccount } from './domain/models/saving-account';
import { AccountType } from './domain/models/accounts.model';
import { SavingAccountService } from '../../application/saving-account.service';

@Controller('saving')
export class SavingAccountController {
  constructor(private readonly accountService: SavingAccountService) {}
  @Get()
  findAll(): SavingsAccount[] {
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
  ): SavingsAccount {
    return this.accountService.createAccount(
      clientId,
      accountType,
      balance,
      transactions,
      createdAt,
      updateAtAt,
    );
  }

  @Patch(':id')
  updateBalance(
    @Param('id') id: number,
    @Body('balance') newBalance: number,
  ): SavingsAccount {
    return this.accountService.updateBalance(id, newBalance);
  }

  @Patch(':id/account')
  updateAccounType(
    @Param('id') id: number,
    @Body('accountType') accountType: AccountType,
  ): SavingsAccount {
    return this.accountService.updateAccounType(id, accountType);
  }

  @Delete(':id')
  removeAccount(@Param('id', ParseIntPipe) id: number): void {
    return this.accountService.removeAccount(id);
  }
}
