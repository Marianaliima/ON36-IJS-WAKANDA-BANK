import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { AccountType } from '../domain/accounts.model';
import { CheckingAccount } from '../domain/checking-account';

@Injectable()
export class AccountService {
  private readonly filePath = path.resolve('src/account/data/accounts.json');

  private readAccount(): CheckingAccount[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as CheckingAccount[];
  }

  private writeAccount(accounts: CheckingAccount[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  createAccount(
    clientId: number,
    accountType: AccountType,
    balance: number,
    transactions: string,
    createAt: Date,
    updateAt: Date,
    overdraft: number = 500,
  ): CheckingAccount {
    const accounts = this.readAccount();

    const newAccount: CheckingAccount = {
      accountId:
        accounts.length > 0 ? accounts[accounts.length - 1].accountId + 1 : 1,
      clientId,
      accountType,
      balance,
      overdraft,
      transactions,
      createAt,
      updateAt,
    };

    accounts.push(newAccount);
    this.writeAccount(accounts);
    return newAccount;
  }

  findAll(): CheckingAccount[] {
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
    } else if (
      account.transactions === 'withdraw' &&
      account.balance === 0 &&
      account.overdraft > 0
    ) {
      account.balance = Number(account.overdraft) - Number(newBalance);
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
