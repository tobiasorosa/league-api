import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProfileDto } from './entities/profile-dto';
import { ProfileService } from './profile.service';

@Resolver(() => ProfileDto)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => ProfileDto)
  async getProfileByName(
    @Args('name') name: string,
    @Args('region') region: string,
  ): Promise<ProfileDto> {
    const profile = await this.profileService.getSummonerByName(name, region);

    return profile;
  }
}
