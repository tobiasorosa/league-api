import { IsArray, IsString } from 'class-validator';

export class MetadataDto {
  @IsString()
  readonly dataVersion: string;

  @IsString()
  readonly matchId: string;

  @IsArray()
  readonly participants: string[];
}
