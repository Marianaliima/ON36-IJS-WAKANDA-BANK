
export enum AccountType {
  CURRENT_ACCOUNT = 'current',
  SAVING_ACCOUNT = 'saving',
}

export class Account {
  constructor(
    public accountId: number,
    public clientId: number,
    public accountType: AccountType,
    public balance: number,
    public overdraft: number,
    public createdAt: Date,
    public updateAt: Date,
    public transactions?: string,
  ) {}
}
