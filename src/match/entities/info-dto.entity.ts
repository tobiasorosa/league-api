import { IsArray, IsNumber, IsString } from 'class-validator';
import { ParticipantDto } from './participant-dto.entity';
import { TeamDto } from './team-dto.entity';

export class InfoDto {
  @IsNumber()
  readonly gameCreation: number;

  @IsNumber()
  readonly gameDuration: number;

  @IsNumber()
  readonly gameEndTimestamp: number;

  @IsNumber()
  readonly gameId: number;

  @IsString()
  readonly gameMode: string;

  @IsString()
  readonly gameName: string;

  @IsNumber()
  readonly gameStartTimestamp: number;

  @IsString()
  readonly gameType: number;

  @IsString()
  readonly gameVersion: number;

  @IsNumber()
  readonly mapId: number;

  @IsArray({
    each: true,
  })
  readonly participants: ParticipantDto[];

  @IsString()
  readonly platformId: string;

  @IsNumber()
  readonly queueId: number;

  @IsArray({
    each: true,
  })
  readonly teams: TeamDto[];

  @IsString()
  readonly tournamentCode: string;
}
