import * as mongoose from "mongoose";


export const patientSchema = new mongoose.Schema({
    patientName:String,
    patientEmail:String,
    patientAge:String,
    patientAddress:String,
    gender:String,
    contactNumber:Number,
    notes:String
})