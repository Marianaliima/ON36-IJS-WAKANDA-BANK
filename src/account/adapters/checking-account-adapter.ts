import { CheckingAccount } from '../models/cheking-account';
import { AccountCheckAdapter } from '../adapters/account-check-adapter.interface';

export class CheckingAccountAdapter implements AccountCheckAdapter {
  constructor(private checkingAccount: CheckingAccount) {}

  toAccountCheckFormat() {
    return {
      accountId: this.checkingAccount.accountId,
      currentBalance: this.checkingAccount.balance,
      clientId: this.checkingAccount.clientId,
      createAt: this.checkingAccount.createAt,
      updateAt: this.checkingAccount.updateAt,
      accountType: 'Current',
    };
  }
}