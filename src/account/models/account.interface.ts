
export enum AccountType {
  CURRENT_ACCOUNT = 'current',
  SAVING_ACCOUNT = 'saving',
}

export interface Account {
    accountId: number,
    clientId: number,
    accountType: AccountType,
    balance: number,
    transactions?: string,
    overdraft?: number,
    createAt: Date,
    updateAt: Date,
  
}
