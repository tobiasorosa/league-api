import { ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';
import { PerksDto } from './perks-dto.entity';

@ObjectType()
export class ParticipantDto {
  @IsNumber()
  readonly assists: number;

  @IsNumber()
  readonly baronKills: number;

  @IsNumber()
  readonly bountyLevel: number;

  @IsNumber()
  readonly champExperience: number;

  @IsNumber()
  readonly champLevel: number;

  @IsNumber()
  readonly championId: number;

  @IsString()
  readonly championName: string;

  @IsNumber()
  readonly championTransform: number;

  @IsNumber()
  readonly consumablesPurchased: number;

  @IsNumber()
  readonly damageDealtToBuildings: number;

  @IsNumber()
  readonly damageDealtToObjectives: number;

  @IsNumber()
  readonly damageDealtToTurrets: number;

  @IsNumber()
  readonly damageSelfMitigated: number;

  @IsNumber()
  readonly deaths: number;

  @IsNumber()
  readonly detectorWardsPlaced: number;

  @IsNumber()
  readonly doubleKills: number;

  @IsNumber()
  readonly dragonKills: number;

  @IsBoolean()
  readonly firstBloodAssist: boolean;

  @IsBoolean()
  readonly firstBloodKill: boolean;

  @IsBoolean()
  readonly firstTowerAssist: boolean;

  @IsBoolean()
  readonly firstTowerKill: boolean;

  @IsBoolean()
  readonly gameEndedInEarlySurrender: boolean;

  @IsBoolean()
  readonly gameEndedInSurrender: boolean;

  @IsNumber()
  readonly goldEarned: number;

  @IsNumber()
  readonly goldSpent: number;

  @IsString()
  readonly individualPosition: string;

  @IsNumber()
  readonly inhibitorKills: number;

  @IsNumber()
  readonly inhibitorTakedowns: number;

  @IsNumber()
  readonly inhibitorsLost: number;

  @IsNumber()
  readonly item0: number;

  @IsNumber()
  readonly item1: number;

  @IsNumber()
  readonly item2: number;

  @IsNumber()
  readonly item3: number;

  @IsNumber()
  readonly item4: number;

  @IsNumber()
  readonly item5: number;

  @IsNumber()
  readonly item6: number;

  @IsNumber()
  readonly itemsPurchased: number;

  @IsNumber()
  readonly killingSprees: number;

  @IsNumber()
  readonly kills: number;

  @IsString()
  readonly lane: string;

  @IsNumber()
  readonly largestCriticalStrike: number;

  @IsNumber()
  readonly largestKillingSpree: number;

  @IsNumber()
  readonly largestMultiKill: number;

  @IsNumber()
  readonly longestTimeSpentLiving: number;

  @IsNumber()
  readonly magicDamageDealt: number;

  @IsNumber()
  readonly magicDamageDealtToChampions: number;

  @IsNumber()
  readonly magicDamageTaken: number;

  @IsNumber()
  readonly neutralMinionsKilled: number;

  @IsNumber()
  readonly nexusKills: number;

  @IsNumber()
  readonly nexusTakedowns: number;

  @IsNumber()
  readonly nexusLost: number;

  @IsNumber()
  readonly objectivesStolen: number;

  @IsNumber()
  readonly objectivesStolenAssists: number;

  @IsNumber()
  readonly participantId: number;

  @IsNumber()
  readonly pentaKills: number;

  @IsObject()
  readonly perks: PerksDto;

  @IsNumber()
  readonly physicalDamageDealt: number;

  @IsNumber()
  readonly physicalDamageDealtToChampions: number;

  @IsNumber()
  readonly physicalDamageTaken: number;

  @IsNumber()
  readonly profileIcon: number;

  @IsString()
  readonly puuid: string;

  @IsNumber()
  readonly quadraKills: number;

  @IsString()
  readonly riotIdName: string;

  @IsString()
  readonly riotIdTagline: string;

  @IsString()
  readonly role: string;

  @IsNumber()
  readonly sightWardsBoughtInGame: number;

  @IsNumber()
  readonly spell1Casts: number;

  @IsNumber()
  readonly spell2Casts: number;

  @IsNumber()
  readonly spell3Casts: number;

  @IsNumber()
  readonly spell4Casts: number;

  @IsNumber()
  readonly summoner1Casts: number;

  @IsNumber()
  readonly summoner1Id: number;

  @IsNumber()
  readonly summoner2Casts: number;

  @IsNumber()
  readonly summoner2Id: number;

  @IsString()
  readonly summonerId: string;

  @IsNumber()
  readonly summonerLevel: number;

  @IsString()
  readonly summonerName: string;

  @IsBoolean()
  readonly teamEarlySurrendered: boolean;

  @IsNumber()
  readonly teamId: number;

  @IsString()
  readonly teamPosition: string;

  @IsNumber()
  readonly timeCCingOthers: number;

  @IsNumber()
  readonly timePlayed: number;

  @IsNumber()
  readonly totalDamageDealt: number;

  @IsNumber()
  readonly totalDamageDealtToChampions: number;

  @IsNumber()
  readonly totalDamageShieldedOnTeammates: number;

  @IsNumber()
  readonly totalDamageTaken: number;

  @IsNumber()
  readonly totalHeal: number;

  @IsNumber()
  readonly totalHealsOnTeammates: number;

  @IsNumber()
  readonly totalMinionsKilled: number;

  @IsNumber()
  readonly totalTimeCCDealt: number;

  @IsNumber()
  readonly totalTimeSpentDead: number;

  @IsNumber()
  readonly totalUnitsHealed: number;

  @IsNumber()
  readonly tripleKills: number;

  @IsNumber()
  readonly trueDamageDealt: number;

  @IsNumber()
  readonly trueDamageDealtToChampions: number;

  @IsNumber()
  readonly trueDamageTaken: number;

  @IsNumber()
  readonly turretKills: number;

  @IsNumber()
  readonly turretTakedowns: number;

  @IsNumber()
  readonly turretsLost: number;

  @IsNumber()
  readonly unrealKills: number;

  @IsNumber()
  readonly visionScore: number;

  @IsNumber()
  readonly visionWardsBoughtInGame: number;

  @IsNumber()
  readonly wardsKilled: number;

  @IsNumber()
  readonly wardsPlaced: number;

  @IsBoolean()
  readonly win: boolean;
}
