import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetailsController } from './details/details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DetailsService } from './details/details.service';
import { UserDetailsModule } from './details/details.module';

@Module({
  imports: [UserDetailsModule,MongooseModule.forRoot('mongodb+srv://vignesh:vignesh@cluster0.heg2j.mongodb.net/nestproject?retryWrites=true&w=majority')],
  controllers: [AppController, DetailsController],
  providers: [AppService],
})
export class AppModule {}
