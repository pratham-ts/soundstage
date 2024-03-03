import { Module } from '@nestjs/common';
import { SoundstageModule } from './soundstage/soundstage.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'common/config/ormconfig';
import { tblUsers } from './soundstage/entities/TblUsers';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...ormConfig, entities: [tblUsers] }),
    SoundstageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
