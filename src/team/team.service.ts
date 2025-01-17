import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}
  
  async getAllTeam() {
    return this.prisma.teams.findMany();
  }
  
  async getTeamById(id: number) {
    return this.prisma.teams.findUnique({ where: { id } });
  }
  
  async createTeam(data: Prisma.TeamsCreateInput) {
    return this.prisma.teams.create({ data });
    }
    
    async updateTeam(id: number, data: Prisma.TeamsUpdateInput) {
    return this.prisma.teams.update({ where: { id }, data });
  }
  
  async deleteTeam(id: number) {
    return this.prisma.teams.delete({ where: { id } });
  }
}
