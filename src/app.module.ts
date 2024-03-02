import { Module } from '@nestjs/common';
import { SoundstageModule } from './soundstage/soundstage.module';

@Module({
  imports: [SoundstageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
