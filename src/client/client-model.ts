export class Client {
  constructor(
    public clientId: number,
    public name: string,
    public email: string,
    public dateOfBirthday: string,
    public documentId: string,
    public phoneNumber: string,
    public streetAddress: string,
    public city: string,
    public state: string,
    public country: string,
    public managerId: string,
    public createAt: Date,
  ) {}
}
