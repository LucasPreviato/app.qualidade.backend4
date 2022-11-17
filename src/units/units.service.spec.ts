import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import ValidUnit from './common/test/validUnit';
import { PrismaUnitsRepository } from './repositories/implementations/prisma.repository';
import { UnitsService } from './units.service';

describe('UnitsService', () => {
  let unitsService: UnitsService;
  let prisma: PrismaService;

  const prismaMock = {
    unit: {
      create: jest.fn(),
      findMany: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UnitsService,
        PrismaUnitsRepository,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    unitsService = module.get<UnitsService>(UnitsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(unitsService).toBeDefined();
  });

  describe('findAllUnits', () => {
    it('it should be list all units', async () => {
      const unit = ValidUnit.giveMeAValidUnit();

      prismaMock.unit.findMany.mockReturnValue([unit, unit]);
      const units = await unitsService.findAll();

      expect(units).toHaveLength(2);
      expect(prismaMock.unit.findMany).toHaveBeenCalledTimes(1);
    });
  });
});
