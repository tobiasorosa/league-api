import { Body, Controller, Get, Param } from '@nestjs/common';
import { SummonerService } from './summoner.service';

@Controller('summoner')
export class SummonerController {
  constructor(private readonly summonerService: SummonerService) {}

  @Get(':id')
  findById(@Param('id') id: string, @Body('region') region: string) {
    return this.summonerService.findById(id, region);
  }

  @Get()
  findByName(@Body('name') name: string, @Body('region') region: string) {
    return this.summonerService.findByName(name, region);
  }
}
