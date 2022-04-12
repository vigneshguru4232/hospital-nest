import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from './interface/doctor.interface';
import { Model } from 'mongoose';
import { createDoctor } from 'src/management/dto/create-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(@InjectModel('doctor') private doctorModel: Model<Doctor>) {}

  async findAll(): Promise<Doctor[]> {
    return await this.doctorModel.find();
  }

  async create(doctor: Doctor): Promise<Doctor> {
    try {
      if (
        !doctor.doctorName ||
        !doctor.doctorEmail ||
        !doctor.docContactNumber ||
        !doctor.specializedIn ||
        !doctor.degree
      ) {
        throw new Error('Enter all the Field');
      }
      const { doctorEmail } = doctor;
      const findExistDoctor = await this.doctorModel.findOne({ doctorEmail });
      if (findExistDoctor) {
        throw new Error('Doctor Already Registered');
      }

      const createNewDoctor = await this.doctorModel.create(doctor);
      return createNewDoctor;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, doctor: Doctor): Promise<Doctor> {
    return await this.doctorModel.findByIdAndUpdate(id, doctor, { new: true });
  }

  async deleteDoctor(id: string): Promise<Doctor> {
    return await this.doctorModel.findByIdAndDelete(id);
  }
}
