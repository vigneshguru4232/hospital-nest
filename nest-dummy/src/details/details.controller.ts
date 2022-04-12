import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUseDetails } from './dto/create-user.dto';
import {DetailsService} from "./details.service";
import {User} from "./interfaces/user.interface"

@Controller('details')
export class DetailsController {

constructor(private readonly detailService:DetailsService){}

  @Get()
  findAll(): Promise<User[]> {
    return this.detailService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Get Details: ${id}`
  }

  @Post()
  create(@Body() createUseDetails:CreateUseDetails): Promise<User> {
    return this.detailService.create(createUseDetails);
  }

  @Put(':id')
  updateDetails(@Body() updateUserDetails:CreateUseDetails ,@Param('id') id): Promise<User> {
    return this.detailService.update(updateUserDetails,id)
  }

  @Delete(':id')
  removeDetail(@Param('id') id): Promise<User> {
    return this.detailService.deleteUser(id)
  }
 
}
