import { HttpService } from '@nestjs/axios';
import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { MatchService } from 'src/match/match.service';
import { SummonerService } from 'src/summoner/summoner.service';

@Injectable()
export class ProfileService {
  constructor(
    private httpService: HttpService,
    private matchService: MatchService,
    private summonerService: SummonerService,
  ) {}

  @Get()
  async getSummonerByName(name: string, region: string) {
    const summoner = await this.summonerService.findByName(name, region);

    if (!summoner) {
      throw new NotFoundException('Summoner not found in selected server');
    }

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
    };
  }
}
