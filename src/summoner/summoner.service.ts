import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Regions } from '../constants/regionsHosts';
import { Summoner } from './entities/summoner.entity';

@Injectable()
export class SummonerService {
  constructor(private httpService: HttpService) {}

  findById(id: string, region: Regions): Observable<Summoner> {
    return this.httpService.get(
      `https://${region}/lol/summoner/v4/summoners/${id}`,
      {
        headers: {
          'X-Riot-Token': process.env.LOL_API_KEY,
        },
      },
    );
  }
}
