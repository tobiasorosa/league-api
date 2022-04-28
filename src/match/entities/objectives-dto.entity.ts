import { ObjectType } from '@nestjs/graphql';
import { IsObject } from 'class-validator';
import { ObjectiveDto } from './objective-dto.entity';

@ObjectType()
export class ObjectivesDto {
  @IsObject()
  readonly baron: ObjectiveDto;

  @IsObject()
  readonly champion: ObjectiveDto;

  @IsObject()
  readonly dragon: ObjectiveDto;

  @IsObject()
  readonly inhibitor: ObjectiveDto;

  @IsObject()
  readonly riftHerald: ObjectiveDto;

  @IsObject()
  readonly tower: ObjectiveDto;
}
