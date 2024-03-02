import { Injectable } from '@nestjs/common';
import { CreateSoundStageDto } from 'common/proto/soundstage/soundstage';

@Injectable()
export class SoundstageService {
  createSoundStageUser(createSoundStageDto: CreateSoundStageDto) {
    console.log(
      `This action adds a new soundstage with user id ${createSoundStageDto.userId}`,
    );
    return `This action adds a new soundstage with user id ${createSoundStageDto.userId}`;
  }
}
