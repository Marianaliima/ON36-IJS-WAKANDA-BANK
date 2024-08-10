import { SavingsAccount } from '../models/saving-accounts';
import { AccountCheckAdapter } from '../adapters/account-check-adapter.interface';

export class SavingAccountAdapter implements AccountCheckAdapter {
  constructor(private checkingAccount:SavingsAccount) {}

  toAccountCheckFormat() {
    return {
      accountId: this.checkingAccount.accountId,
      currentBalance: this.checkingAccount.balance,
      clientId: this.checkingAccount.clientId,
      createAt: this.checkingAccount.createAt,
      updateAt: this.checkingAccount.updateAt,
      accountType: 'Savings',
    };
  }
}