import { AccountModel, Transactions } from "./domain/models/account";

export abstract class Account implements AccountModel {
  public accountId: string;
  public createAt: Date;
  public password: string;
  public balance: number;
  private _transactions: Transactions[];
  constructor(
    accountId: string,
    createAt: Date,
    password: string,
    balance: number
  ) {
    this.accountId = accountId;
    this.createAt = createAt;
    this.password = password;
    this._transactions = [];

    this.balance = balance;
  }

  transactions(): Transactions[] {
    return this._transactions;
  }

  getBalance(): number {
    return this.balance
  }
}
