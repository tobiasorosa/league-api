import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { MatchService } from 'src/match/match.service';
import { SummonerService } from 'src/summoner/summoner.service';
import { ProfileDto } from './entities/profile-dto';

@Injectable()
export class ProfileService {
  constructor(
    private matchService: MatchService,
    private summonerService: SummonerService,
  ) {}

  @Get()
  async getSummonerByName(name: string, region: string): Promise<ProfileDto> {
    const summoner = await this.summonerService.findByName(name, region);

    if (!summoner) {
      throw new NotFoundException('Summoner not found in selected server');
    }

    const summonerRank = await this.summonerService.getRank(
      summoner.id,
      region,
    );

    const firstMatches = await this.matchService.findFirstMatches(
      summoner.puuid,
      region,
    );

    const firstMatchesData = await Promise.all(
      firstMatches.map(async (matchId) => {
        return await this.matchService.findById(matchId, region);
      }),
    );

    return {
      summoner,
      firstMatchesData,
      summonerRank,
    };
  }
}
