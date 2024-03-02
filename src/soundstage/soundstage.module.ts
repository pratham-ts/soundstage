import { Module } from '@nestjs/common';
import { SoundstageService } from './soundstage.service';
import { SoundstageController } from './soundstage.controller';

@Module({
  controllers: [SoundstageController],
  providers: [SoundstageService],
})
export class SoundstageModule {}
