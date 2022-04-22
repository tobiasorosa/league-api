import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummonerModule } from './summoner/summoner.module';
import { ConfigModule } from '@nestjs/config';
import { MatchModule } from './match/match.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    SummonerModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MatchModule,
  ],
})
export class AppModule {}
