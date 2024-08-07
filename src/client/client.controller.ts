import { Body, Controller, Get, Patch, Param, Post } from '@nestjs/common';
import { Client } from './client-model';
import { ClientAccountService } from './client.service';

@Controller('clients')
export class ClientAccountController {
  constructor(private readonly clientAccountService: ClientAccountService) {}

  @Post()
  createClient(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('dateOfBirthay') dateOfBirthday: string,
    @Body('documentId') documentId: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('streetAddress') streetAddress: string,
    @Body('city') city: string,
    @Body('state') state: string,
    @Body('country') country: string,
    @Body('managerId') managerId: string,
    @Body('createAt') createAt: Date,
  ): Client {
    return this.clientAccountService.createClient(
      name,
      email,
      dateOfBirthday,
      documentId,
      phoneNumber,
      streetAddress,
      city,
      state,
      country,
      managerId,
      createAt,
    );
  }

  @Get(':id')
  findById(@Param('id') id: number): Client {
    return this.clientAccountService.findById(id);
  }

  @Patch(':id')
  updateContactInformation(
    @Param('id') id: number,
    @Body('email') newEmail: string,
    @Body('phoneNumber') newPhoneNumber: string,
  ): Client {
    return this.clientAccountService.updateContactInformation(
      id,
      newEmail,
      newPhoneNumber,
    );
  }
}
