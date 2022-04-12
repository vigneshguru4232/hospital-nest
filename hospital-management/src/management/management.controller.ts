import { Body, Controller, Delete, Get, Post, Put,Param } from '@nestjs/common';
import { CreatePatient } from './dto/create-patient.dto';
import { PatientService } from './services/patient/patient.service';
import { Patient } from './interfaces/patient.interface';
import { DoctorService } from './services/doctor/doctor.service';
import { Doctor } from './interfaces/doctor-interface';


@Controller('management')
export class ManagementController {
    constructor(private readonly patientService:PatientService ){}


    //Patients Controller

    @Get("/patients")
    patientfindAll():Promise<Patient[]>{
        return this.patientService.findAll()
    }

    @Post("/patients")
    createNewPatient(@Body() createPatient: CreatePatient):Promise<Patient>{
        return this.patientService.create(createPatient);
    }
    @Put("/patients/:id")
    updatePatient(@Body() createPatient: CreatePatient,@Param('id') id):Promise<Patient>{
        return this.patientService.update(id,createPatient);
    }

    @Delete("/patients/:id")
    deletePatient(@Param('id') id):Promise<Patient>{
        return this.patientService.deletePatient(id)
    }

    //Doctor

    // @Get("/doctors")
    // getAllDoctors():Promise<Doctor[]>{
    //     return this.doctorService.findAll();
    // }


}
