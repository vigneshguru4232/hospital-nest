import * as mongoose from "mongoose";

export const doctorSchema = new mongoose.Schema({
    doctorName:String,
    doctorEmail:String,
    docContactNumber:Number,
    degree:String,
    specializedIn:String
})