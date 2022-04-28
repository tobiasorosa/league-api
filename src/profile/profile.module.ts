import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { RegionsService } from 'src/regions/regions.service';
import { RegionsModule } from 'src/regions/regions.module';
import { HttpModule } from '@nestjs/axios';
import { RegionsController } from 'src/regions/regions.controller';
import { SummonerModule } from 'src/summoner/summoner.module';
import { SummonerController } from 'src/summoner/summoner.controller';
import { SummonerService } from 'src/summoner/summoner.service';
import { MatchController } from 'src/match/match.controller';
import { MatchService } from 'src/match/match.service';
import { MatchModule } from 'src/match/match.module';
import { ProfileResolver } from './profile.resolver';

@Module({
  imports: [HttpModule, RegionsModule, SummonerModule, MatchModule],
  controllers: [
    ProfileController,
    RegionsController,
    SummonerController,
    MatchController,
  ],
  providers: [
    ProfileService,
    RegionsService,
    SummonerService,
    MatchService,
    ProfileResolver,
  ],
})
export class ProfileModule {}
