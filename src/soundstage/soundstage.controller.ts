import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SoundstageService } from './soundstage.service';
import {
  CreateSoundStageDto,
  SOUND_STAGE_SERVICE_NAME,
  SoundStageServiceController,
} from 'common/proto/soundstage/soundstage';

@Controller()
export class SoundstageController implements SoundStageServiceController {
  constructor(private readonly soundstageService: SoundstageService) {}

  @GrpcMethod(SOUND_STAGE_SERVICE_NAME, 'createSoundStageUser')
  createSoundStageUser(createSoundStageDto: CreateSoundStageDto) {
    return this.soundstageService.createSoundStageUser(createSoundStageDto);
  }
}
