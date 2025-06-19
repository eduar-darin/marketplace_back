import { Module } from '@nestjs/common';
import { RegisterClientService } from './register-client.service';
import { RegisterClientController } from './register-client.controller';

@Module({
  controllers: [RegisterClientController],
  providers: [RegisterClientService],
})
export class RegisterClientModule {}
