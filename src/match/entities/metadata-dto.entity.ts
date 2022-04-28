import { ObjectType } from '@nestjs/graphql';
import { IsArray, IsString } from 'class-validator';

@ObjectType()
export class MetadataDto {
  @IsString()
  readonly dataVersion: string;

  @IsString()
  readonly matchId: string;

  @IsArray()
  readonly participants: string[];
}
