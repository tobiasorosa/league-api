import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { RegionsService } from 'src/regions/regions.service';
import { RankDto } from './entities/rank-dto.entity';
import { SummonerDto } from './entities/summoner.entity';

@Injectable()
export class SummonerService {
  constructor(
    private httpService: HttpService,
    private regionsService: RegionsService,
  ) {}

  async findById(id: string, region: string): Promise<SummonerDto | undefined> {
    const regionHost = this.regionsService.getRegion(region);
    const summoner = await lastValueFrom(
      this.httpService.get(
        `https://${regionHost}/lol/summoner/v4/summoners/${id}`,
        {
          headers: {
            'X-Riot-Token': process.env.LOL_API_KEY,
          },
        },
      ),
    );

    if (!summoner.data) {
      throw new NotFoundException(
        `Summoner with this id not found in the selected region`,
      );
    }

    return summoner.data;
  }

  async findByName(
    name: string,
    region: string,
  ): Promise<SummonerDto | undefined> {
    const regionHost = this.regionsService.getRegion(region);
    const summoner = await lastValueFrom(
      this.httpService.get(
        `https://${regionHost}/lol/summoner/v4/summoners/by-name/${name}`,
        {
          headers: {
            'X-Riot-Token': process.env.LOL_API_KEY,
          },
        },
      ),
    );

    if (!summoner.data) {
      throw new NotFoundException(
        `Summoner with this name not found in the selected region`,
      );
    }

    return summoner.data;
  }

  async getRank(id: string, region: string): Promise<RankDto[] | undefined> {
    const regionHost = this.regionsService.getRegion(region);

    const summonerRank = await lastValueFrom(
      this.httpService.get(
        `https://${regionHost}/lol/league/v4/entries/by-summoner/${id}`,
        {
          headers: {
            'X-Riot-Token': process.env.LOL_API_KEY,
          },
        },
      ),
    );

    if (!summonerRank.data) {
      throw new NotFoundException(
        `Summoner with this name not found in the selected region`,
      );
    }

    return summonerRank.data;
  }
}
