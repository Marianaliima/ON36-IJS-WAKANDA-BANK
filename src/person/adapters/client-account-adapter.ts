import { ClientAccout } from '../models/client-model'
import { PersonAccountAdapter } from './person-account-adapter'

export class ClientAccountAdapter implements PersonAccountAdapter {
  client: ClientAccout

  constructor(client: ClientAccout) {
    this.client = client
  }

  toPersonAccountFormat(): any {
    return {
      name: this.client.name,
      personType: this.client.personType,
      email: this.client.email,
      dateOfBirthday: this.client.dateOfBirthday,
      documentId: this.client.documentId,
      phoneNumber: this.client.phoneNumber,
      streetAddress: this.client.streetAddress,
      city: this.client.city,
      state: this.client.state,
      country: this.client.country,
      createdAt: this.client.createdAt,
      clientId: this.client.clientId,
    }
  }
}