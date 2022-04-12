import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { patientSchema } from './schema/patient.schema';
import { PatientService } from './patient.service';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'patient', schema: patientSchema }])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
