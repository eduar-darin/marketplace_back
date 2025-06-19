import { PartialType } from '@nestjs/swagger';
import { CreateRegisterClientDto } from './create-register-client.dto';

export class UpdateRegisterClientDto extends PartialType(CreateRegisterClientDto) {}
