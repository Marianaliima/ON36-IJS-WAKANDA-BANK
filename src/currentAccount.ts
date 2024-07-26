import { Account } from "./clientAccount";
import { Transactions } from "./domain/models/account";

class CurrentAccount extends Account {
 private overdraftLimit: number;

  constructor(
    accountId: string,
    createAt: Date,
    password: string,
    balance: number,
    overdraftLimit: number
  ) {
    super(accountId, createAt, password, balance)
    this.overdraftLimit = overdraftLimit;
  }

  addTransactionAmount(transaction: Transactions): void {
    const transactions = this.transactions();
    transactions.push(transaction);
    transaction.amount ? (this.balance += transaction.amount) : undefined;
  }

  addTransactionWithdraw(transaction: Transactions): void {
    if (transaction.withdraw) {
      const transactions = this.transactions();
      transactions.push(transaction);

      const totalAvailable = this.balance + this.overdraftLimit;

      if (totalAvailable >= transaction.withdraw) {
          this.balance -= transaction.withdraw;
      } else {
          console.log('Insufficient account balance, including overdraft limit.');
      }
  }
}
  }


const account = new CurrentAccount("12345", new Date(), "securePassword", 0, 700);
account.addTransactionWithdraw({
  transactionID: "t1",
  withdraw: 600,
  date: new Date(),
});

console.log(account.getBalance());
console.log(account.transactions());
