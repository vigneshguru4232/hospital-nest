import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';


@Injectable()
export class DetailsService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async findAll():Promise<User[]>{
        return await this.userModel.find();
    }

    async create(user:User):Promise<User>{
        return await this.userModel.create(user)
    }

    async update(user:User,id:string){
        return await this.userModel.findByIdAndUpdate(id,user,{new:true})
    }

    async deleteUser(id:string):Promise<User>{
        return await this.userModel.findByIdAndRemove(id)
    }

}
