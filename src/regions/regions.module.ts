import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';
import { RegionsResolver } from './regions.resolver';

@Module({
  controllers: [RegionsController],
  providers: [RegionsService, RegionsResolver],
})
export class RegionsModule {}
