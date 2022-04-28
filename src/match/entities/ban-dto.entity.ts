import { ObjectType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@ObjectType()
export class BanDto {
  @IsNumber()
  readonly championId: number;

  @IsNumber()
  readonly pickTurn: number;
}
