import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppointmentSchema } from './schema/appointment.schema';
import { AppointmentService } from './appointment.service';
import { PatientService } from 'src/patient/patient.service';
import { patientSchema } from 'src/patient/schema/patient.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'appointment', schema: AppointmentSchema }]),MongooseModule.forFeature([{ name: 'patient', schema: patientSchema }])],
  controllers: [AppointmentController],
  providers: [AppointmentService,PatientService],
  exports:[AppointmentService,PatientService]
})
export class AppointmentModule {}
