import { Field, ObjectType } from '@nestjs/graphql';
import { IsArray, IsObject } from 'class-validator';
import { MatchDto } from 'src/match/entities/match-dto.entity';
import { RankDto } from 'src/summoner/entities/rank-dto.entity';
import { SummonerDto } from 'src/summoner/entities/summoner.entity';

@ObjectType()
export class ProfileDto {
  @IsObject()
  @Field()
  readonly summoner: SummonerDto;

  @IsArray({ each: true })
  @Field(() => [MatchDto])
  readonly firstMatchesData: MatchDto[];

  @IsObject()
  @Field(() => [RankDto])
  readonly summonerRank: RankDto[];
}
