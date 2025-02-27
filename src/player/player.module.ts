import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [PlayerModule],
  providers: [PlayerService, PrismaService],
  controllers: [PlayerController],
})
export class PlayerModule {}
