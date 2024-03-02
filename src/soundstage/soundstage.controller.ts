import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { SoundstageService } from './soundstage.service';
import {
  CreateSoundStageDto,
  SoundStageServiceController,
} from 'common/proto/soundstage/soundstage';

@Controller()
export class SoundstageController implements SoundStageServiceController {
  constructor(private readonly soundstageService: SoundstageService) {}

  @GrpcMethod('SoundStageService', 'createSoundstage')
  createSoundStageUser(createSoundStageDto: CreateSoundStageDto) {
    return this.soundstageService.createSoundStageUser(createSoundStageDto);
  }
}
