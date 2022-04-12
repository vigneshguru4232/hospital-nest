import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
//import { Patient } from '..'

@Schema()
export class Appointment extends Document {

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'patient' })
  patient:  Types.ObjectId

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'doctor' })
  doctor:  Types.ObjectId

  @Prop()
  startTime:String

  @Prop()
  endTime:String

}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);