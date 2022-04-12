import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from '../../interfaces/doctor-interface';
import { Model } from 'mongoose';

@Injectable()
export class DoctorService {
  constructor(@InjectModel('doctor') private doctorModel: Model<Doctor>) {}

  async findAll(): Promise<Doctor[]> {
    return await this.doctorModel.find();
  }

  async create(doctor: Doctor): Promise<Doctor> {
    return await this.doctorModel.create(doctor);
  }

  async update(id: string, doctor: Doctor): Promise<Doctor> {
    return await this.doctorModel.findByIdAndUpdate(id, doctor, { new: true });
  }

  async deletePatient(id: string): Promise<Doctor> {
    return await this.doctorModel.findByIdAndDelete(id);
  }
}
