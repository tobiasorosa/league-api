import { ObjectType } from '@nestjs/graphql';
import { IsObject } from 'class-validator';
import { InfoDto } from './info-dto.entity';
import { MetadataDto } from './metadata-dto.entity';

@ObjectType()
export class MatchDto {
  @IsObject()
  readonly metadata: MetadataDto;

  @IsObject()
  readonly info: InfoDto;
}
