import { IsBoolean, IsNumber } from 'class-validator';

export class ObjectiveDto {
  @IsBoolean()
  readonly first: boolean;

  @IsNumber()
  readonly kills: number;
}
