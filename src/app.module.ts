import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientAccountModule } from './person/client.module';
import { AccountModule } from './account/account.module';
import { ManagerModule } from './person/manager.module';
import { SavingAccountModule } from './account/saving-account.module';
import { PostalServiceModule } from './postal-service/postal-service.module';

@Module({
  imports: [
    ClientAccountModule,
    AccountModule,
    ManagerModule,
    SavingAccountModule,
    PostalServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
