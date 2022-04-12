import { Module } from '@nestjs/common';
 import { ManagementController } from '../management.controller'; 
 import { MongooseModule } from '@nestjs/mongoose';
 import { doctorSchema } from '../schema/doctor.schema';
 import { DoctorService } from '../services/doctor/doctor.service'
import { PatientService } from '../services/patient/patient.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'doctor', schema: doctorSchema }])],
  controllers: [ManagementController],
  providers: [DoctorService,PatientService],
  exports:[DoctorService]
})
export class DoctorModule {}
