import {Person } from "./person.model";
import { PersonType } from "./person-type-enum";
import { SavingsAccount } from "src/account/models/saving-account";


export class ClientAccount extends Person  {
    clientId: number
    clientAccount?: SavingsAccount[] = [];

    constructor(
        name: string,
        personType: PersonType,
        email: string,
        dateOfBirthday: string,
        documentId: string,
        phoneNumber: string,
        streetAddress: string,
        city: string,
        state: string,
        country: string,
        createdAt: string,
        clientId: number) {
            super(name, personType, email, dateOfBirthday, documentId, phoneNumber, streetAddress, city, state, country, createdAt)
            this.clientId = clientId
            this.clientAccount = []

        }
      
   
}