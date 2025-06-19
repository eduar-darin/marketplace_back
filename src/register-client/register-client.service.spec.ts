import { Test, TestingModule } from '@nestjs/testing';
import { RegisterClientService } from './register-client.service';

describe('RegisterClientService', () => {
  let service: RegisterClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterClientService],
    }).compile();

    service = module.get<RegisterClientService>(RegisterClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
