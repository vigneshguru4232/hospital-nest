import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAppointment } from './dto/appointment.dto';
import { Appointment } from './interface/appointment.interface';
import { AppointmentService } from "./appointment.service"

@Controller('appointment')
export class AppointmentController {
    constructor(private readonly appointmentService:AppointmentService){}

    @Get()
    findall():Promise<Appointment[]>{
        return this.appointmentService.getAppointment()
    }

    @Post()
    createAppointment(@Body() appointment:CreateAppointment):Promise<Appointment>{
        return this.appointmentService.createAppointment(appointment)
    }
}
