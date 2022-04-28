import { ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class PerkStyleSelectionDto {
  @IsNumber()
  readonly perk: number;

  @IsNumber()
  readonly var1: number;

  @IsNumber()
  readonly var2: number;

  @IsNumber()
  readonly var3: number;
}
