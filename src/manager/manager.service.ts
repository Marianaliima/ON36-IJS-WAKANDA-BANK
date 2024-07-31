import { Injectable } from '@nestjs/common';
import { Manager } from './manager.model';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'src/client/client-model';
import { Account, AccountType } from 'src/account/account.model';

@Injectable()
export class ManagerService {
  private readonly filePath = path.resolve('src/manager/manager.json');
  private readManager(): Manager[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Manager[];
  }

  private writeManager(managers: Manager[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(managers, null, 2), 'utf8');
  }

  private readonly filePathClients = path.resolve(
    'src/client/clients.json',
  );
  private readClient(): Client[] {
    const data = fs.readFileSync(this.filePathClients, 'utf8');
    return JSON.parse(data) as Client[];
  }

  private readonly filePathAccount = path.resolve('src/account/accounts.json');

  private readAccount(): Account[] {
    const data = fs.readFileSync(this.filePathAccount, 'utf8');
    return JSON.parse(data) as Account[];
  }

  private writeAccount(accounts: Account[]): void {
    fs.writeFileSync(
      this.filePathAccount,
      JSON.stringify(accounts, null, 2),
      'utf8',
    );
  }

  createManager(name: string, managerId: string): Manager {
    const clients = this.readClient();
    const managers = this.readManager();
    const test = clients.filter((client) => client.managerId === managerId);
    console.log(test);
    const newManager: Manager = {
      managerId,
      name,
      clientsList: test,
    };

    managers.push(newManager);
    this.writeManager(managers);
    return newManager;
  }

  createAccount(
    clientId: number,
    accountType: AccountType,
    balance: number,
    overdraft: number,
    createdAt: Date,
    updateAt: Date,
    transactions: string,
  ): Account {
    const accounts = this.readAccount();

    const newAccount: Account = {
      accountId:
        accounts.length > 0 ? accounts[accounts.length - 1].accountId + 1 : 1,
      clientId,
      accountType,
      balance,
      transactions,
      overdraft,
      createdAt,
      updateAt,
    };

    accounts.push(newAccount);
    this.writeAccount(accounts);
    return newAccount;
  }

  findAll(): Manager[] {
    return this.readManager();
  }
}
