import { ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

@ObjectType()
export class RankDto {
  @IsString()
  readonly leagueId: string;

  @IsString()
  readonly queueType: string;

  @IsString()
  readonly tier: string;

  @IsString()
  readonly rank: string;

  @IsString()
  readonly summonerId: string;

  @IsNumber()
  readonly leaguePoints: number;

  @IsNumber()
  readonly wins: number;

  @IsNumber()
  readonly losses: number;

  @IsBoolean()
  readonly veteran: boolean;

  @IsBoolean()
  readonly inactive: boolean;

  @IsBoolean()
  readonly freshBlood: boolean;

  @IsBoolean()
  readonly hotStreak: boolean;
}
