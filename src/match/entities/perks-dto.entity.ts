import { ObjectType } from '@nestjs/graphql';
import { IsArray, IsObject } from 'class-validator';
import { PerkStatsDto } from './perk-stats-dto.entity';
import { PerkStyleDto } from './perk-style-dto.entity';

@ObjectType()
export class PerksDto {
  @IsObject()
  readonly statPerks: PerkStatsDto;

  @IsArray({ each: true })
  readonly styles: PerkStyleDto[];
}
