import { Injectable } from '@nestjs/common';
import { CreateRegisterClientDto } from './dto/create-register-client.dto';
import { UpdateRegisterClientDto } from './dto/update-register-client.dto';

@Injectable()
export class RegisterClientService {
  create(createRegisterClientDto: CreateRegisterClientDto) {
    return 'Register Client is succesfull';
  }

  findAll() {
    return `This action returns all registerClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerClient`;
  }

  update(id: number, updateRegisterClientDto: UpdateRegisterClientDto) {
    return `This action updates a #${id} registerClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerClient`;
  }
}
