import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { HttpModule } from '@nestjs/axios';
import { RegionsModule } from 'src/regions/regions.module';
import { RegionsController } from 'src/regions/regions.controller';
import { RegionsService } from 'src/regions/regions.service';
import { MatchResolver } from './match.resolver';

@Module({
  imports: [HttpModule, RegionsModule],
  controllers: [MatchController, RegionsController],
  providers: [MatchService, RegionsService, MatchResolver],
})
export class MatchModule {}
