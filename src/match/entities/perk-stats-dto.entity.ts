import { IsNumber } from 'class-validator';

export class PerkStatsDto {
  @IsNumber()
  readonly defense: number;

  @IsNumber()
  readonly flex: number;

  @IsNumber()
  readonly offense: number;
}
