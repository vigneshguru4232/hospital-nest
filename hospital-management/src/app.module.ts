import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientModule } from './patient/patient.module';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';



@Module({
  imports: [PatientModule,DoctorModule,AppointmentModule,MongooseModule.forRoot('mongodb+srv://vignesh:vignesh@cluster0.pkycf.mongodb.net/hospital?retryWrites=true&w=majority')],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
