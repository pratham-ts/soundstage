import { Module } from '@nestjs/common';
import { SoundstageModule } from './soundstage/soundstage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import ormConfig from 'common/config/ormconfig';
import { tblUsers } from './soundstage/entities/TblUsers';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ENV ? `.env.${ENV}` : '.env' }),
    TypeOrmModule.forRoot({ ...ormConfig, entities: [tblUsers] }),
    SoundstageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
