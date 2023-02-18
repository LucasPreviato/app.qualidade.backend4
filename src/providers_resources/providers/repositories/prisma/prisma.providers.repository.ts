import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProviderInput } from '../../dto/create-provider.input';
import { UpdateProviderInput } from '../../dto/update-provider.input';
import { Provider } from '../../entities/provider.entity';
import { ProvidersRepository } from '../providers.repository';

@Injectable()
export class PrismaProvidersRepository implements ProvidersRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    name,
    email,
    phone,
    providersCategoryId,
  }: CreateProviderInput): Promise<Provider> {
    const provider = await this.prisma.provider.create({
      data: {
        name,
        email,
        phone,
        providerCategory: {
          connect: { id: providersCategoryId },
        },
      },
      include: {
        providerCategory: true,
      },
    });
    return provider;
  }

  async findAll(): Promise<Provider[]> {
    const providers = await this.prisma.provider.findMany({
      include: {
        providerCategory: true,
      },
    });
    return providers;
  }

  async findOne(id: number): Promise<Provider | null> {
    const provider = await this.prisma.provider.findUnique({
      where: { id },
    });
    return provider;
  }

  async update(
    id: number,
    { name, email, phone, providersCategoryId }: UpdateProviderInput
  ): Promise<Provider> {
    const provider = await this.prisma.provider.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        providerCategory: {
          connect: { id: providersCategoryId },
        },
      },
      include: {
        providerCategory: true,
      },
    });
    return provider;
  }

  async remove(id: number): Promise<Provider> {
    const provider = await this.prisma.provider.delete({
      where: { id },
    });
    return provider;
  }
}
