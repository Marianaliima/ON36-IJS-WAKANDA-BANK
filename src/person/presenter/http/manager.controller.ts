import { Body, Controller, Get, Post } from '@nestjs/common';
import { ManagerAccount } from '../../domain/manager';
import { ManagerService } from '../../application/manager.service';
import { PersonType } from '../../domain/person-type-enum';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post()
  createManager(
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
    @Body('createdAt') createdAt: string,
  ): ManagerAccount {
    return this.managerService.createManager(
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
    );
  }

  @Get()
  findAll(): ManagerAccount[] {
    return this.managerService.findAll();
  }
}
