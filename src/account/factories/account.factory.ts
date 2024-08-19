import { Injectable } from '@nestjs/common';
import { CheckingAccount } from '../models/checking-account';
import { Account } from '../models/accounts.model';
import { AccountType } from '../models/accounts.model';
import { SavingsAccount } from '../models/saving-account';

@Injectable()
export class AccountFactory {
  createAccount(
    accountType: AccountType,
    accountId: number,
    clientId: number,
    createAt: Date,
    updateAt: Date,
    balance: number,
    transactions: string,
    overdraft: number,
    interestRate: number,
  ): Account {
    switch (accountType) {  
      case AccountType.SAVING_ACCOUNT:
        return new SavingsAccount(
      accountId,
     clientId,
     accountType,
     balance,
     transactions,
     createAt,
     updateAt,
        );
      case AccountType.CURRENT_ACCOUNT:
        return new CheckingAccount(
          accountId,
          clientId,
          accountType,
          balance,
          transactions,
          createAt,
          updateAt,
          overdraft,
        );
      default:
        throw new Error('Invalid account type');
    }
  }
}
