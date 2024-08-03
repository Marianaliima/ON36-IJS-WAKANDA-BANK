import { Body, Controller, Get, Post } from '@nestjs/common';
import { Manager } from './manager.model';
import { ManagerService } from './manager.service';
import { Account, AccountType } from '../account/models/account.interface';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post()
  createManager(
    @Body('name') name: string,
    @Body('managerId') managerId: string,
  ): Manager {
    return this.managerService.createManager(name, managerId);
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
    return this.managerService.createAccount(
      clientId,
      accountType,
      balance,
      overdraft,
      createdAt,
      updateAtAt,
      transactions,
    );
  }

  @Get()
  findAll(): Manager[] {
    return this.managerService.findAll();
  }
}
