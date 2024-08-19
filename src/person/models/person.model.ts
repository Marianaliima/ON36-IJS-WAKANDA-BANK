export enum PersonType {
    CLIENT = 'client',
    MANAGER = 'manager',
  }

export class Person {
    constructor(
      public name: string,
      public personType: PersonType,
      public email: string,
      public dateOfBirthday: string,
      public documentId: string,
      public phoneNumber: string,
      public streetAddress: string,
      public city: string,
      public state: string,
      public country: string,
      public createdAt: string,
    ) {}
  }
  