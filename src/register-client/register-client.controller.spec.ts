import { Test, TestingModule } from '@nestjs/testing';
import { RegisterClientController } from './register-client.controller';
import { RegisterClientService } from './register-client.service';

describe('RegisterClientController', () => {
  let controller: RegisterClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterClientController],
      providers: [RegisterClientService],
    }).compile();

    controller = module.get<RegisterClientController>(RegisterClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
