import { Injectable } from '@nestjs/common';
import { ManagerAccount } from './models/manager-model';
import * as path from 'path';
import * as fs from 'fs';
import { PersonType } from './models/person-type-enum';

@Injectable()
export class ManagerService {
  private readonly filePath = path.resolve('src/adapters/data/manager.json');
  private readManager(): ManagerAccount[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as ManagerAccount[];
  }

  private writeManager(managers: ManagerAccount[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(managers, null, 2), 'utf8');
  }

  createManager(  name: string,
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
  ): ManagerAccount {
    const managers = this.readManager();
    const newManager: ManagerAccount = {
      managerId:
      managers.length > 0 ? managers[managers.length - 1].managerId + 1 : 1,
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
    };

    managers.push(newManager);
    this.writeManager(managers);
    return newManager;
  }

 
  findAll(): ManagerAccount[] {
    return this.readManager();
  }
}
