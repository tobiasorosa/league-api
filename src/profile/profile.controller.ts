import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':name/:region')
  getSummonerByName(
    @Param('name') name: string,
    @Param('region') region: string,
  ) {
    return this.profileService.getSummonerByName(name, region);
  }
}
