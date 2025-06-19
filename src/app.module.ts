import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { RegisterClientModule } from './register-client/register-client.module';

@Module({
  imports: [LoginModule, RegisterClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
