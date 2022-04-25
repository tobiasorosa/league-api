import { IsNumber } from 'class-validator';

export class BanDto {
  @IsNumber()
  readonly championId: number;

  @IsNumber()
  readonly pickTurn: number;
}
