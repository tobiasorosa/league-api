import { ObjectType } from '@nestjs/graphql';
import { IsArray, IsObject } from 'class-validator';
import { MatchDto } from 'src/match/entities/match-dto.entity';
import { SummonerDto } from 'src/summoner/entities/summoner.entity';

@ObjectType()
export class ProfileDto {
  @IsObject()
  readonly summoner: SummonerDto;

  @IsArray({ each: true })
  readonly firstMatchesData: MatchDto[];
}
