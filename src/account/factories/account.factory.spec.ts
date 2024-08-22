import { AccountFactory } from './account.factory';
import { AccountType, Account } from './domain/models/accounts.model';
import { CheckingAccount } from './domain/models/checking-account';
import { SavingsAccount } from './domain/models/saving-account';

describe('Account Factory', () => {
  test('should create a saving account', () => {
    const accountFactory = new AccountFactory();

    const type = AccountType.SAVING_ACCOUNT;
    const accountId = 123;
    const clientId = 456;
    const createdAt = new Date();
    const updatedAt = new Date();
    const balance = 1000;

    const retornado = accountFactory.createAccount(
      type,
      accountId,
      clientId,
      createdAt,
      updatedAt,
      balance,
    ) as SavingsAccount;

    expect(retornado).toBeInstanceOf(SavingsAccount);
    expect(retornado.accountId).toBe(accountId);
    expect(retornado.clientId).toBe(clientId);
    expect(retornado.createAt).toBe(createdAt);
    expect(retornado.updateAt).toBe(updatedAt);
    expect(retornado.balance).toBe(balance);
  });

  test('should create a cheking account', () => {
    const accountFactory = new AccountFactory();

    const type = AccountType.CURRENT_ACCOUNT;
    const accountId = 123;
    const clientId = 456;
    const createdAt = new Date();
    const updatedAt = new Date();
    const balance = 1000;

    const retornado = accountFactory.createAccount(
      type,
      accountId,
      clientId,
      createdAt,
      updatedAt,
      balance,
    ) as CheckingAccount;

    expect(retornado).toBeInstanceOf(CheckingAccount);
    expect(retornado.accountId).toBe(accountId);
    expect(retornado.clientId).toBe(clientId);
    expect(retornado.createAt).toBe(createdAt);
    expect(retornado.updateAt).toBe(updatedAt);
    expect(retornado.balance).toBe(balance);
  });
});
