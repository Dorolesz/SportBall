import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamsServices: TeamService) {}

  @Post()
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.teamsServices.createTeam(createTeamDto);
  }

  @Get()
  async getAllTeams() {
    return this.teamsServices.getAllTeam();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsServices.getTeamById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamsServices.updateTeam(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsServices.deleteTeam(+id);
  }
}

