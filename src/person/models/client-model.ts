import {Person, PersonType } from "./person.model";


export class ClientAccount extends Person  {
    clientId: number

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

        }
      
   
}