import { Account } from './account.interface';
import { AccountType } from './account.interface';

export class CheckingAccount implements Account {
  accountType = AccountType.CURRENT_ACCOUNT;

  constructor(
    public accountId: number,
    public clientId: number,
    public balance: number,
    public createAt: Date,
    public updateAt: Date,
  ) {}
}
