import { Injectable } from '@nestjs/common';
import { CheckingAccount } from '../models/cheking-account';
import { Account } from '../models/account.interface';
import { AccountType } from '../models/account.interface';
import { SavingsAccount } from '../models/saving-accounts';

@Injectable()
export class AccountFactory {
  createAccount(type: AccountType, accountId: number, clientId: number, createAt: Date, updateAt: Date, name: string, balance: number): Account {
    switch (type) {
      case AccountType.SAVING_ACCOUNT:
        return new SavingsAccount(accountId, clientId, balance, createAt, updateAt )
      case AccountType.CURRENT_ACCOUNT:
        return new CheckingAccount(accountId, clientId, balance, createAt, updateAt );
      default:
        throw new Error('Invalid account type');
    }
  }
}