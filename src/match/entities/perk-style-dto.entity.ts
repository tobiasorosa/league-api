import { ObjectType } from '@nestjs/graphql';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { PerkStyleSelectionDto } from './perk-style-selection-dto.entity';

@ObjectType()
export class PerkStyleDto {
  @IsString()
  readonly description: string;

  @IsArray({
    each: true,
  })
  readonly selections: PerkStyleSelectionDto[];

  @IsNumber()
  readonly style: number;
}
