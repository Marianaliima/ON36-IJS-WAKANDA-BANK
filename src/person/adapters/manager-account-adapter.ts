import { ManagerAccount } from '../models/manager-model'
import { PersonAccountAdapter } from './person-account-adapter'

export class ManagerAccountAdapter implements PersonAccountAdapter {
  manager: ManagerAccount

  constructor(manager: ManagerAccount) {
    this.manager = manager
  }

  toPersonAccountFormat(): any {
    return {
      name: this.manager.name,
      personType: this.manager.personType,
      email: this.manager.email,
      dateOfBirthday: this.manager.dateOfBirthday,
      documentId: this.manager.documentId,
      phoneNumber: this.manager.phoneNumber,
      streetAddress: this.manager.streetAddress,
      city: this.manager.city,
      state: this.manager.state,
      country: this.manager.country,
      createdAt: this.manager.createdAt,
      managerId: this.manager.managerId,
    }
  }
}