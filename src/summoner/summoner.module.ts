import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SummonerController } from './summoner.controller';
import { SummonerService } from './summoner.service';

@Module({
  imports: [HttpModule],
  controllers: [SummonerController],
  providers: [SummonerService],
})
export class SummonerModule {}
