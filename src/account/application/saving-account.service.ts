import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SavingsAccount } from '../domain/saving-account';
import { AccountType } from '../domain/accounts.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class SavingAccountService {
  private readonly filePath = path.resolve('src/account/data/accounts.json');

  private readAccount(): SavingsAccount[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as SavingsAccount[];
  }

  private writeAccount(accounts: SavingsAccount[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  createAccount(
    clientId: number,
    accountType: AccountType,
    balance: number,
    transactions: string,
    createAt: Date,
    updateAt: Date,
  ): SavingsAccount {
    const accounts = this.readAccount();

    const initialBalance = balance;
    const interestRate = 0.0336;

    const newAccount: SavingsAccount = {
      accountId:
        accounts.length > 0 ? accounts[accounts.length - 1].accountId + 1 : 1,
      clientId,
      accountType,
      balance: Number(initialBalance) + Number(initialBalance * interestRate),
      transactions,
      createAt,
      updateAt,
    };

    this.writeAccount(accounts);

    return newAccount;
  }

  findAll(): SavingsAccount[] {
    return this.readAccount();
  }

  updateBalance(id: number, newBalance: number) {
    const accounts = this.readAccount();
    const interestRate = 0.0336;

    const account = accounts.find(
      (account) => account.accountId === Number(id),
    );

    this.writeAccount(accounts);
    if (account.transactions === 'amount') {
      const updatedBalance = Number(newBalance) * interestRate;
      account.balance = Number(account.balance) + updatedBalance;
      this.writeAccount(accounts);
    }

    if (account.transactions === 'withdraw' && account.balance > 0) {
      account.balance = Number(account.balance) - Number(newBalance);
      this.writeAccount(accounts);
    } else {
      throw new HttpException(
        'Insufficient account balance.',
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
