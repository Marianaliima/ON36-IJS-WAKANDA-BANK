import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';


@Injectable()
export class PostalServiceService {
     URL_POSTAL_SERVICE = 'http://viacep.com.br/ws/{POSTALCODE}/json';

    constructor(private readonly httpService: HttpService) {}

    async findAddressByPostalCode(postalCode: string): Promise<AxiosResponse<any>> {
        const url = this.URL_POSTAL_SERVICE.replace('{POSTALCODE}', postalCode);
        return this.httpService.axiosRef.get(url).then((response) => {
            if(response.data.erro === true) {
                throw new NotFoundException('Postal code not found');
            }
            return response.data;
        }).catch((error: AxiosError) => {
            throw new BadRequestException(`Error in connection request ${error.message}`);
      });
    }
}
