import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {  ClientAccount } from '../domain/client';
import * as path from 'path';
import * as fs from 'fs';
import { PersonType } from '../domain/person-type-enum';

@Injectable()
export class ClientAccountService {
  private readonly filePath = path.resolve('src/adapters/data/clients.json');

  private readClient():  ClientAccount[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as  ClientAccount[];
  }

  private writeAccount(clients: ClientAccount[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(clients, null, 2), 'utf8');
  }
  createClient(
    name: string,
    personType: PersonType,
    email: string,
    phoneNumber: string,
    streetAddress: string,
    dateOfBirthday: string,
    city: string,
    state: string,
    country: string,
    documentId: string,
    createdAt: string,
     clientAccount: [],
  ):  ClientAccount {
    const clients = this.readClient();
    const newClient:  ClientAccount = {
      clientId:
        clients.length > 0 ? clients[clients.length - 1].clientId + 1 : 1,
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
      clientAccount,
    };
    clients.push(newClient);
    this.writeAccount(clients);
    console.log(newClient);
    return newClient;
  }

  findById(id: number): ClientAccount {
    const clients = this.readClient();
    const client = clients.find((client) => client.clientId === Number(id));

    if (!client) {
      throw new HttpException(
        `Client with id ${id} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return client;
  }

  updateContactInformation(
    id: number,
    newEmail: string,
    newPhoneNumber: string,
  ) {
    const clients = this.readClient();
    const client = clients.find((client) => client.clientId === Number(id));

    client.email = newEmail;
    client.phoneNumber = newPhoneNumber;
    this.writeAccount(clients);

    if (!client) {
      throw new HttpException(
        `Client with id ${id} not found`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return client;
  }
}
