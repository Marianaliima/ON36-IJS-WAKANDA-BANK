import { ClientModel } from "./domain/models/client"

export class Client implements ClientModel {
    name: string
    idNumber: string
    address: string
    phoneNumber: string

    private readonly clients: Client[] = []

    constructor(name: string, idNumber: string, address: string, phoneNumber: string ) {
        this.name = name,
        this.idNumber = idNumber,
        this.address = address,
        this.phoneNumber = phoneNumber

    }
       addClient(name: string, idNumber: string, address: string, phoneNumber: string): void {
        this.clients.push(new Client(name, idNumber, address, phoneNumber));
    }
    
}


