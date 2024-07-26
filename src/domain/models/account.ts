 export interface Transactions {
  transactionID: string;
  amount?: number;
  withdraw?: number;
  date: Date;
}

export interface AccountModel {
  createAt: Date;
  password: string;
  balance: number;
  transactions(): Transactions[];
}
