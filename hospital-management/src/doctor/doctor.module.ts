import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { doctorSchema } from './schema/doctor.schema';
import { DoctorService } from './doctor.service';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'doctor', schema: doctorSchema }])],
  controllers: [DoctorController],
  providers: [DoctorService],
  exports:[DoctorService]
})
export class DoctorModule {}
