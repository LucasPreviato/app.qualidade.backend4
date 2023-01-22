import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProviderInput } from 'src/providers/dto/create-provider.input';
import { UpdateProviderInput } from 'src/providers/dto/update-provider.input';
import { Provider } from 'src/providers/entities/provider.entity';
import { ProvidersRepository } from '../providers.repository';

@Injectable()
export class PrismaProvidersRepository implements ProvidersRepository {
  constructor(private prisma: PrismaService) {}
  async create({
    name,
    tradeName,
    address,
    district,
    city,
    state,
    zipCode,
    cnpj,
    crm,
    providerCritical,
    contactName,
    email,
    phone,
    website,
    departmentId,
    providerCategoryId,
  }: CreateProviderInput): Promise<Provider> {
    const newProvider = await this.prisma.provider.create({
      data: {
        name,
        tradeName,
        address,
        district,
        city,
        state,
        zipCode,
        cnpj,
        crm,
        providerCritical,
        contactName,
        email,
        phone,
        website,
        department: { connect: { id: departmentId } },
        ProviderCategory: { connect: { id: providerCategoryId } },
      },
      include: {
        department: true,
        ProviderCategory: true,
      },
    });
    return newProvider;
  }
  async findAll(): Promise<Provider[]> {
    const providers = await this.prisma.provider.findMany({
      include: {
        department: true,
        ProviderCategory: true,
      },
    });
    return providers;
  }
  async findOne(id: number): Promise<Provider> {
    const provider = await this.prisma.provider.findUnique({
      where: { id },
      include: {
        department: true,
        ProviderCategory: true,
      },
    });
    return provider;
  }
  update(
    id: number,
    {
      name,
      tradeName,
      address,
      district,
      city,
      state,
      zipCode,
      cnpj,
      crm,
      providerCritical,
      contactName,
      email,
      phone,
      website,
      departmentId,
      providerCategoryId,
    }: UpdateProviderInput
  ): Promise<Provider> {
    const updatedProvider = this.prisma.provider.update({
      where: { id },
      data: {
        name,
        tradeName,
        address,
        district,
        city,
        state,
        zipCode,
        cnpj,
        crm,
        providerCritical,
        contactName,
        email,
        phone,
        website,
        department: { connect: { id: departmentId } },
        ProviderCategory: { connect: { id: providerCategoryId } },
      },
      include: {
        department: true,
        ProviderCategory: true,
      },
    });
    return updatedProvider;
  }
  remove(id: number): Promise<Provider> {
    const deletedProvider = this.prisma.provider.delete({
      where: { id },
      include: {
        department: true,
        ProviderCategory: true,
      },
    });
    return deletedProvider;
  }
}
