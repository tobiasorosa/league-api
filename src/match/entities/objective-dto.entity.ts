import { ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber } from 'class-validator';

@ObjectType()
export class ObjectiveDto {
  @IsBoolean()
  readonly first: boolean;

  @IsNumber()
  readonly kills: number;
}
