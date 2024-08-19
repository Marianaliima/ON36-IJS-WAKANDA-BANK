import { Account, AccountType } from './account.interface';

export class SavingsAccount implements Account {
  accountType = AccountType.SAVING_ACCOUNT;

  constructor(
    public accountId: number,
    public clientId: number,
    public balance: number,
    public createAt: Date,
    public updateAt: Date,
  ) {}
}
