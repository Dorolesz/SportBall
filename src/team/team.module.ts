import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [TeamModule],
  providers: [TeamService, PrismaService],
  controllers: [TeamController],
})
export class TeamModule {}
