import { Injectable } from "@nestjs/common";
import { ClientAccount } from '../models/client-model'
import { ManagerAccount } from '../models/manager-model'
import { Person, PersonType } from '../models/person.model'

@Injectable()
export class PersonFactory {
  createPerson(
    personType: PersonType, 
    name: string,
    email: string,
    dateOfBirthday: string,
    documentId: string,
    phoneNumber: string,
    streetAddress: string,
    city: string,
    state: string,
    country: string,
    createdAt: string,
    clientId: number,
    managerId: number
  ): Person {
    switch (personType) {
      case PersonType.CLIENT:
        return new ClientAccount(
          name,
          personType,  
          email,
          dateOfBirthday,
          documentId,
          phoneNumber,
          streetAddress,
          city,
          state,
          country,
          createdAt,
          clientId,
        );
        case PersonType.MANAGER:
          return new ManagerAccount(
            name,
            personType,  
            email,
            dateOfBirthday,
            documentId,
            phoneNumber,
            streetAddress,
            city,
            state,
            country,
            createdAt,
            managerId,
          )
      
      default:
        throw new Error(`Unknown person type: ${personType}`);
    }
  }
}