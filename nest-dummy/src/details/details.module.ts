import { Module } from '@nestjs/common';
import { DetailsController } from './details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDetails } from './schemas/users.schema';
import { DetailsService } from './details.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserDetails }])],
  controllers: [ DetailsController],
  providers: [DetailsService],
  exports:[DetailsService]
})
export class UserDetailsModule{}
