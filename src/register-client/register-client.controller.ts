import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegisterClientService } from './register-client.service';
import { CreateRegisterClientDto } from './dto/create-register-client.dto';
import { UpdateRegisterClientDto } from './dto/update-register-client.dto';

@Controller('register-client')
export class RegisterClientController {
  constructor(private readonly registerClientService: RegisterClientService) {}

  @Post()
  createClient(@Body() createRegisterClientDto: CreateRegisterClientDto) {
    return this.registerClientService.create(createRegisterClientDto);
  }

  @Get()
  findAll() {
    return this.registerClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerClientService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRegisterClientDto: UpdateRegisterClientDto,
  ) {
    return this.registerClientService.update(+id, updateRegisterClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerClientService.remove(+id);
  }
}
