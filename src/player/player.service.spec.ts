import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from './player.service';
import { PrismaService } from '../prisma.service';
import { CreatePlayerDto } from './dto/create-player.dto';

describe('PlayerService', () => {
  let service: PlayerService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerService, PrismaService],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a player with correct birthDate format', async () => {
    const createPlayerDto: CreatePlayerDto = {
      name: 'Calvin',
      goalCount: 5,
      birthDate: '2000-05-01',
    };

    const createdPlayer = {
      id: 1,
      ...createPlayerDto,
      birthDate: new Date(createPlayerDto.birthDate),
    };

    jest.spyOn(prismaService.players, 'create').mockResolvedValue(createdPlayer);

    const result = await service.createPlayer(createPlayerDto);
    expect(result).toEqual(createdPlayer);
    expect(prismaService.players.create).toHaveBeenCalledWith({
      data: {
        ...createPlayerDto,
        birthDate: new Date(createPlayerDto.birthDate),
      },
    });
  });
});
