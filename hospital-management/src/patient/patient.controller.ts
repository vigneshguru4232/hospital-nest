import { Controller, Get, Param, Post, Put,Body, Delete } from '@nestjs/common';
import { CreatePatient } from './dto/create-patient.dto';
import { PatientService } from './patient.service';
import { Patient } from './interfaces/patient.interface';

@Controller('patient')
export class PatientController {
    constructor(private readonly patientService:PatientService){}

    @Get()
    findAll():Promise<Patient[]>{
        return this.patientService.findAll()
    }

    // @Get()
    // findOne():string{
    //     return "Get one Patients";
    // }

    @Post()
    create(@Body() createPatient: CreatePatient):Promise<Patient>{
        return this.patientService.create(createPatient);
    }

    @Put(':id')
    update(@Body() createPatient: CreatePatient,@Param('id') id):Promise<Patient>{
        return this.patientService.update(id,createPatient);
    }

    @Delete(':id')
    deletePatient(@Param('id') id):Promise<Patient>{
        return this.patientService.deletePatient(id)
    }

}
