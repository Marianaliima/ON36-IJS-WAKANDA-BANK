import { Body, Controller, Get, Patch, Param, Post } from '@nestjs/common';
import { ClientAccount } from './models/client-model';
import { ClientAccountService } from './client.service';
import { PersonType } from './models/person.model';

@Controller('clients')
export class ClientAccountController {
  constructor(private readonly clientAccountService: ClientAccountService) {}

  @Post()
  createClient(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('personType') personType: PersonType,
    @Body('dateOfBirthay') dateOfBirthday: string,
    @Body('documentId') documentId: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('streetAddress') streetAddress: string,
    @Body('city') city: string,
    @Body('state') state: string,
    @Body('country') country: string,
    @Body('createAt') createdAt:string,
  ): ClientAccount {
    return this.clientAccountService.createClient(
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
      createdAt
    );
  }

  @Get(':id')
  findById(@Param('id') id: number): ClientAccount {
    return this.clientAccountService.findById(id);
  }

  @Patch(':id')
  updateContactInformation(
    @Param('id') id: number,
    @Body('email') newEmail: string,
    @Body('phoneNumber') newPhoneNumber: string,
  ): ClientAccount {
    return this.clientAccountService.updateContactInformation(
      id,
      newEmail,
      newPhoneNumber,
    );
  }
}
