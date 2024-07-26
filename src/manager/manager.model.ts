import { Client } from 'src/client/client-model';

export class Manager {
  constructor(
    public name: string,
    public managerId: string,
    public clientsList: Client[],
  ) {}
}
