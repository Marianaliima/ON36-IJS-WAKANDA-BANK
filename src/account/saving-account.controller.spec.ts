import { Test, TestingModule } from '@nestjs/testing';
import { SavingAccountController } from './presenter/http/saving-account.controller';

describe('SavingAccountController', () => {
  let controller: SavingAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavingAccountController],
    }).compile();

    controller = module.get<SavingAccountController>(SavingAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
