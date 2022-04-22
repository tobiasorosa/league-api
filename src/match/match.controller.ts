import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get(':puuid')
  findFirstMatches(
    @Param('puuid') puuid: string,
    @Body('region') region: string,
  ) {
    return this.matchService.findFirstMatches(puuid, region);
  }
}
