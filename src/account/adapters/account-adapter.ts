import { Injectable } from "@nestjs/common";
import { Account, AccountType } from "../models/account.interface";
import { CheckingAccountAdapter } from "./checking-account-adapter";
import { AccountCheckAdapter } from "./account-check-adapter.interface";
import { SavingAccountAdapter } from "./savings-account-adapter";


@Injectable()

export class AccountAdapter {
    createAdapter(account: Account) : AccountCheckAdapter {
        switch (account.accountType) {
            case AccountType.CURRENT_ACCOUNT:
                return new CheckingAccountAdapter(account as any)
            case AccountType.SAVING_ACCOUNT:
                return new SavingAccountAdapter(account as any)
        }
    }
}