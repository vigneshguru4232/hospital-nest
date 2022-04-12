import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './interface/doctor.interface';
import { CreateDoctor } from './dto/cretae-doctor.dto';

@Controller('doctor')
export class DoctorController {
    constructor(private readonly doctorService:DoctorService){}

    @Get()
    findAll():Promise<Doctor[]>{
        return this.doctorService.findAll()
    }

    @Post()
    create(@Body() createDoctor:CreateDoctor ):Promise<Doctor>{
        return this.doctorService.create(createDoctor)
    }

    @Put(':id')
    updateDoctor(@Body() updateDoctor:CreateDoctor , @Param('id') id):Promise<Doctor>{
        return this.doctorService.update(id,updateDoctor);
    }

    @Delete(':id')
    deleteDoctor(@Param('id') id):Promise<Doctor>{
        return this.doctorService.deleteDoctor(id)
    }
}
