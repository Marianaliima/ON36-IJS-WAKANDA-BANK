import { Test, TestingModule } from '@nestjs/testing';
import { PostalServiceController } from './postal-service.controller';

describe('PostalServiceController', () => {
  let controller: PostalServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostalServiceController],
    }).compile();

    controller = module.get<PostalServiceController>(PostalServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
