import { IsArray, IsBoolean, IsNumber, IsObject } from 'class-validator';
import { BanDto } from './ban-dto.entity';
import { ObjectivesDto } from './objectives-dto.entity';

export class TeamDto {
  @IsArray({
    each: true,
  })
  readonly bans: BanDto[];

  @IsObject()
  readonly objectives: ObjectivesDto;

  @IsNumber()
  readonly teamId: number;

  @IsBoolean()
  readonly win: boolean;
}
