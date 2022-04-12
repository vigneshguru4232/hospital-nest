import { Injectable } from '@nestjs/common';
import { Appointment } from './interface/appointment.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from 'src/patient/interfaces/patient.interface';
import { Doctor } from 'src/doctor/interface/doctor.interface';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel('appointment') private appointmentModel: Model<Appointment>,
    @InjectModel('patient') private patientModel: Model<Patient>,
  ) {}

  //Geting Appointment
  async getAppointment(): Promise<Appointment[]> {
    return this.appointmentModel.find().populate(['patient', 'doctor']);
  }

  //createing Appointmnet
  async createAppointment(appointment: Appointment): Promise<Appointment> {
    try {
      const { patient, doctor, startTime, endTime } = appointment;
      const findingPatient = await this.patientModel.findById({ _id:patient });
      //console.log(findingPatient)
      if (findingPatient === null) {
        throw new Error('Enter Correct Patient Id ');
      }
      const createNewAppointment = await this.appointmentModel.create(appointment);
      return createNewAppointment;
    } catch (error) {
        console.log(error)
    }
     
  }
}
