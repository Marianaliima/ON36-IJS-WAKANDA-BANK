
import { Account } from "./clientAccount"
import { Transactions } from "./domain/models/account";


class SavingAccount extends Account {
private interestRate: number =  0.0336

  constructor(accountId: string, createAt: Date, password: string, balance: number){
      super(accountId, createAt, password, balance);
  }



  addTransactionAmount(transaction: Transactions): void {
    const transactions = this.transactions();
    transactions.push(transaction);
    transaction.amount ?  this.balance += transaction.amount * this.interestRate : undefined;
}

addTransactionWithdraw(transaction: Transactions): void {
    const transactions = this.transactions();
    transactions.push(transaction);
    transaction.withdraw ?  this.balance -= transaction.withdraw  : undefined;
}

}

const account = new SavingAccount('12345', new Date(), 'securePassword', 1000);
account.addTransactionAmount({ transactionID: 't1', amount: 200, date: new Date() });
account.addTransactionWithdraw({ transactionID: 't1', withdraw: 300, date: new Date() });

console.log(account.getBalance());
console.log(account.transactions()); 

