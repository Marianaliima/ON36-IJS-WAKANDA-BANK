
export enum AccountType {
  CURRENT_ACCOUNT = 'current',
  SAVING_ACCOUNT = 'saving',
}

export abstract class Account {
  constructor(
   public accountId: number,
   public clientId: number,
   public balance: number,
   public accountType: AccountType,
   public transactions: string,
   public createAt: Date,
   public updateAt: Date,
  ) {}
  
}
