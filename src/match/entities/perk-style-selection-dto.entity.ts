import { IsNumber } from 'class-validator';

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
