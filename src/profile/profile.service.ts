import { HttpService } from '@nestjs/axios';
import { Get, Injectable, Param } from '@nestjs/common';
import { MatchService } from 'src/match/match.service';
import { RegionsService } from 'src/regions/regions.service';
import { SummonerService } from 'src/summoner/summoner.service';

@Injectable()
export class ProfileService {
  constructor(
    private httpService: HttpService,
    private regionsService: RegionsService,
    private matchService: MatchService,
    private summonerService: SummonerService,
  ) {}

  @Get(':name/:region')
  async getSummonerByName(
    @Param('name') name: string,
    @Param('region') region: string,
  ) {
    const regionHost = this.regionsService.getRegion(region);

    const summoner = await this.summonerService.findByName(name, region);
    const firstMatches = await this.matchService.findFirstMatches(
      summoner.puuid,
      region,
    );
  }
}
