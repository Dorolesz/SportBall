import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(private readonly prisma: PrismaService) {}

  async createPlayer(data: CreatePlayerDto) {
    return this.prisma.players.create({
      data: {
        ...data,
        birthDate: new Date(data.birthDate) // Ensure birthDate is in YYYY-MM-DD format
      }
    });
  }

  async getAllPlayers() {
    return this.prisma.players.findMany();
  }

  async getPlayerById(id: number) {
    return this.prisma.players.findUnique({ where: { id } });
  }

  async updatePlayer(id: number, data: UpdatePlayerDto) {
    return this.prisma.players.update({
      where: { id },
      data: {
        ...data,
        birthDate: data.birthDate ? new Date(data.birthDate) : undefined// Ensure birthDate is in YYYY-MM-DD format
      }
    });
  }

  async deletePlayer(id: number) {
    return this.prisma.players.delete({ where: { id } });
  }
}
