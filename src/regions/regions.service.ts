import { Get, Injectable } from '@nestjs/common';
import { regions } from 'src/constants/regions';

@Injectable()
export class RegionsService {
  @Get()
  getRegion(region: string): string {
    switch (region) {
      case 'BR':
        return regions.BR1;
      case 'EUN':
        return regions.EUN1;
      case 'EUW':
        return regions.EUW1;
      case 'JP':
        return regions.JP1;
      case 'KR':
        return regions.KR;
      case 'LA1':
        return regions.LA1;
      case 'LA2':
        return regions.LA2;
      case 'NA':
        return regions.NA1;
      case 'OC':
        return regions.OC1;
      case 'TR':
        return regions.TR1;
      case 'RU':
        return regions.RU;
    }
  }
}
