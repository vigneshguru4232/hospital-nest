import * as mongoose from "mongoose"

export const UserDetails = new mongoose.Schema({
    name:{
        type:String
    },
    age:Number,
    address:String,
    phone:Number,
    gender:String
})