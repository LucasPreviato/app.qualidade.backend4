import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddressesService } from './addresses.service';
import { PrismaAddressesRepository } from './repositories/implementations/prisma.repository';

describe('AddressesService', () => {
  let addressesService: AddressesService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let prisma: PrismaService;
  const prismaMock = {
    unit: {
      findMany: jest.fn(),
      findOne: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressesService,
        PrismaAddressesRepository,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    addressesService = module.get<AddressesService>(AddressesService);
  });

  it('should be defined', () => {
    expect(addressesService).toBeDefined();
  });
});
