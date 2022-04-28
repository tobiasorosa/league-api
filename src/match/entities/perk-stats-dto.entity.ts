import { ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class PerkStatsDto {
  @IsNumber()
  readonly defense: number;

  @IsNumber()
  readonly flex: number;

  @IsNumber()
  readonly offense: number;
}
