import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProvidersCategoryInput } from '../../dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from '../../dto/update-providers-category.input';
import { ProvidersCategory } from '../../entities/providers-category.entity';
import { ProvidersCategoryRepository } from '../providers-categories.repository';

@Injectable()
export class PrismaProvidersCategoryRepository
  implements ProvidersCategoryRepository
{
  constructor(private prisma: PrismaService) {}
  async create({
    name,
    requiresInitialQualification,
    requiredPeriodicEvaluation,
    periodicCheck,
  }: CreateProvidersCategoryInput): Promise<ProvidersCategory> {
    const newProvidersCategory = await this.prisma.providerCategory.create({
      data: {
        name,
        requiresInitialQualification,
        requiredPeriodicEvaluation,
        periodicCheck,
      },
    });
    return newProvidersCategory;
  }
  async findAll(): Promise<ProvidersCategory[]> {
    const providersCategories = await this.prisma.providerCategory.findMany({});
    return providersCategories;
  }
  async findOne(id: number): Promise<ProvidersCategory> {
    const providersCategory = await this.prisma.providerCategory.findUnique({
      where: {
        id,
      },
    });
    return providersCategory;
  }
  async update(
    id: number,
    updateProvidersCategoryInput: UpdateProvidersCategoryInput
  ): Promise<ProvidersCategory> {
    const updateProvidersCategory = await this.prisma.providerCategory.update({
      where: {
        id,
      },
      data: {
        ...updateProvidersCategoryInput,
      },
    });
    return updateProvidersCategory;
  }
  async delete(id: number): Promise<ProvidersCategory> {
    return await this.prisma.providerCategory.delete({
      where: {
        id,
      },
    });
  }
}
