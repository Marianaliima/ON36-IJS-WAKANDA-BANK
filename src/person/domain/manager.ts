import { Person } from './person';
import { PersonType } from './person-type-enum';

export class ManagerAccount extends Person {
  managerId: number;

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
    managerId: number,
  ) {
    super(
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
    );
    this.managerId = managerId;
  }
}
