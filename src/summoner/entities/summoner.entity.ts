import { ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@ObjectType()
export class SummonerDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly accountId: string;

  @IsString()
  readonly puuid: string;

  @IsString()
  readonly name: string;

  @IsNumber()
  readonly profileIconId: number;

  @IsNumber()
  readonly revisionDate: number;

  @IsNumber()
  readonly summonerLevel: number;
}
