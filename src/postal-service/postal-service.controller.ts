import { Controller, Get, Param } from '@nestjs/common';
import { PostalServiceService } from './postal-service.service';

@Controller('postal')
export class PostalServiceController {
    constructor(private readonly postalServiceService: PostalServiceService) {}

    @Get('/:postalCode')
    async findAll(@Param('postalCode') postalCode: string): Promise<any> {
        return this.postalServiceService.findAddressByPostalCode(postalCode);
    }
}
