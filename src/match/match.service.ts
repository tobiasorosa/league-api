import { HttpService } from '@nestjs/axios';
import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { RegionsService } from 'src/regions/regions.service';

@Injectable()
export class MatchService {
  constructor(
    private httpService: HttpService,
    private regionsService: RegionsService,
  ) {}

  @Get()
  async findFirstMatches(puuid: string, region: string) {
    const regionHost = this.regionsService.getRouting(region);
    const summoner = await lastValueFrom(
      this.httpService.get(
        `https://${regionHost}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}`,
        {
          headers: {
            'X-Riot-Token': process.env.LOL_API_KEY,
          },
        },
      ),
    );

    if (!summoner.data) {
      throw new NotFoundException(
        `No matches found for this id in selected region`,
      );
    }

    return summoner.data;
  }
}
