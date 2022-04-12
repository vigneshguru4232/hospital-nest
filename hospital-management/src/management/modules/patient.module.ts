import { Module } from '@nestjs/common';
 import { ManagementController } from '../management.controller'; 
 import { MongooseModule } from '@nestjs/mongoose';
 import { patientSchema } from '../schema/patinet.schema';
 import { PatientService } from '../services/patient/patient.service';
import { DoctorService } from '../services/doctor/doctor.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'patient', schema: patientSchema }])],
  controllers: [ManagementController],
  providers: [PatientService,DoctorService],
  exports:[PatientService]
})
export class PatientModule {}
