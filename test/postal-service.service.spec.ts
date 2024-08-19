import { Test, TestingModule } from '@nestjs/testing';
import { PostalServiceService } from './postal-service.service';

describe('PostalServiceService', () => {
  let service: PostalServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostalServiceService],
    }).compile();

    service = module.get<PostalServiceService>(PostalServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
