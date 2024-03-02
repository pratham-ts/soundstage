import { Injectable } from '@nestjs/common';
import { CreateSoundStageDto } from 'common/proto/soundstage/soundstage';

@Injectable()
export class SoundstageService {
  createSoundStageUser(createSoundStageDto: CreateSoundStageDto) {
    return `This action adds a new soundstage with user id ${createSoundStageDto.userId}`;
  }
}
