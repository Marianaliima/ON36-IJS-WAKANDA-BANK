import { Account } from './accounts.model';
import { AccountType } from './accounts.model';

export class CheckingAccount extends Account {
  overdraft: number;

  constructor(
     accountId: number,
     clientId: number,
     accountType: AccountType,
     balance: number,
     transactions: string,
     createAt: Date,
     updateAt: Date,
     overdraft: number,
  ) {
    super(accountId,
      clientId,
      balance,
      accountType,
      transactions,
      createAt,
      updateAt,)
      this.overdraft = overdraft
  }
}
