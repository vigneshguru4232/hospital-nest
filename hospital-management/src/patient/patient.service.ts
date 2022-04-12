import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './interfaces/patient.interface';
import {Model} from "mongoose";



@Injectable()
export class PatientService {
    constructor(@InjectModel('patient') private patientModel: Model<Patient>) {}

    async findAll():Promise<Patient[]>{
        return await this.patientModel.find();
    }

    async create(patient:Patient):Promise<Patient>{
        return await this.patientModel.create(patient)
    }

    async update(id:string,patient:Patient):Promise<Patient>{
        return await this.patientModel.findByIdAndUpdate(id,patient,{new:true})
    }

    async deletePatient(id:string):Promise<Patient>{
        return await this.patientModel.findByIdAndDelete(id)
    }

}
