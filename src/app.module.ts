import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientAccountModule } from './client/client.module';
import { AccountModule } from './account/account.module';
import { ManagerModule } from './manager/manager.module';

@Module({
  imports: [ClientAccountModule, AccountModule, ManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
