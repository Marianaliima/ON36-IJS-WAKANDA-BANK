import {Person, PersonType } from "./person.model";


export class ManagerAccount extends Person  {
    managerId: number

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
        createdAt:string,
        managerId: number) {
            super(name, personType, email, dateOfBirthday, documentId, phoneNumber, streetAddress, city, state, country, createdAt)
            this.managerId = managerId

        }
      
   
}