import { Body, Controller, Get, Param } from '@nestjs/common';
import { Regions } from 'src/constants/regionsHosts';
import { SummonerService } from './summoner.service';

@Controller('summoner')
export class SummonerController {
  constructor(private readonly summonerService: SummonerService) {}

  @Get(':id')
  findById(@Param('id') id: string, @Body() region: Regions) {
    return this.summonerService.findById(id, region);
  }
}
