import { PersonFactory } from './person.factory';
import { Person } from '../models/person.model';
import { PersonType } from '../models/person-type-enum';
import { ClientAccount } from '../models/client-model';
import { ManagerAccount } from '../models/manager-model';

describe('Account Factory', () => {
  test('should create a saving account', () => {
    const accountFactory = new PersonFactory();

       const type = PersonType.CLIENT;
       const name =  'Ana';
       const email = 'ana@example.com';
       const dateOfBirthday = '1990-01-01';
       const documentId = '123456789';
       const phoneNumber = '+55 11 99999-9999';
       const streetAddress = '123 Main St';
       const city = 'São Paulo';
       const state = 'SP';
       const country = 'Brazil';
       const createdAt = '2023-05-05';
       const clientId = 1;
       const managerId = 1
       

    const retornado = accountFactory.createPerson(
        type, 
        name, 
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
        clientId,
    ) as ClientAccount;
    expect(retornado.name).toBe(name);                 
    expect(retornado.email).toBe(email);               
    expect(retornado.dateOfBirthday).toBe(dateOfBirthday); 
    expect(retornado.documentId).toBe(documentId);     
    expect(retornado.phoneNumber).toBe(phoneNumber);   
    expect(retornado.streetAddress).toBe(streetAddress); 
    expect(retornado.city).toBe(city);                
    expect(retornado.state).toBe(state);               
    expect(retornado.country).toBe(country);           
    expect(retornado.createdAt).toBe(createdAt);       
    expect(retornado.clientId).toBe(clientId);         
  });

});
