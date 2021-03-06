import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RegionsController } from 'src/regions/regions.controller';
import { RegionsModule } from 'src/regions/regions.module';
import { RegionsService } from 'src/regions/regions.service';
import { SummonerController } from './summoner.controller';
import { SummonerService } from './summoner.service';
import { SummonerResolver } from './summoner.resolver';

@Module({
  imports: [HttpModule, RegionsModule],
  controllers: [SummonerController, RegionsController],
  providers: [SummonerService, RegionsService, SummonerResolver],
})
export class SummonerModule {}
