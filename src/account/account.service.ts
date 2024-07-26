import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Account, AccountType } from './account.model';

@Injectable()
export class AccountService {
  private readonly filePath = path.resolve('src/account/accounts.json');

  private readAccount(): Account[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Account[];
  }

  private writeAccount(accounts: Account[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
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

  findAll(): Account[] {
    return this.readAccount();
  }

  updateBalance(id: number, newBalance: number) {
    const accounts = this.readAccount();

    const account = accounts.find(
      (account) => account.accountId === Number(id),
    );

    this.writeAccount(accounts);
    if (account.transactions === 'amount') {
      account.balance = Number(account.balance) + Number(newBalance);
      this.writeAccount(accounts);
    }

    if (account.transactions === 'withdraw' && account.balance > 0) {
      account.balance = Number(account.balance) - Number(newBalance);
      this.writeAccount(accounts);
    } else {
      throw new HttpException(
        'Insufficient account balance including overdraft limit.',
        HttpStatus.BAD_REQUEST,
      );
    }
    return account;
  }

  updateAccounType(id: number, newAccountType: AccountType) {
    const accounts = this.readAccount();

    const account = accounts.find(
      (account) => account.accountId === Number(id),
    );

    account.accountType = newAccountType;
    this.writeAccount(accounts);
    return account;
  }

  removeAccount(id: number): void {
    const accounts = this.readAccount();
    const accountIndex = accounts.findIndex(
      (account) => account.clientId === Number(id),
    );

    if (accountIndex !== -1) {
      accounts.splice(accountIndex, 1);
      this.writeAccount(accounts);
    } else {
      throw new HttpException('Account not found', HttpStatus.NOT_FOUND);
    }
  }
}
