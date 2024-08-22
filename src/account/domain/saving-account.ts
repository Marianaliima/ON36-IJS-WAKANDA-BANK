import { Account, AccountType } from './accounts.model';

export class SavingsAccount  extends Account {

  constructor(
     accountId: number,
     clientId: number,
     accountType: AccountType,
     balance: number,
     transactions: string,
     createAt: Date,
     updateAt: Date,
  ) {
    super(accountId,
      clientId,
      balance,
      accountType,
      transactions,
      createAt,
      updateAt,)
  }
}
