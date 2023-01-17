import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProvidersCategoryInput } from 'src/providers-categories/dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from 'src/providers-categories/dto/update-providers-category.input';
import { ProvidersCategory } from 'src/providers-categories/entities/providers-category.entity';
import { ProvidersCategoriesRepository } from '../providers-categories-repository';

@Injectable()
export class PrismaProvidersCategoriesRepository
  implements ProvidersCategoriesRepository
{
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProvidersCategoryInput): Promise<ProvidersCategory> {
    const {
      name,
      periodicCheck,
      requiredInitialQualification,
      requiredPeriodicQualification,
    } = data;
    const providersCategory = await this.prisma.providerCategory.create({
      data: {
        name,
        periodicCheck,
        requiredInitialQualification,
        requiredPeriodicQualification,
      },
    });
    return providersCategory;
  }

  async findAll(): Promise<ProvidersCategory[]> {
    const providersCategories = await this.prisma.providerCategory.findMany();
    return providersCategories;
  }

  async findOne(id: number): Promise<ProvidersCategory> {
    const providersCategory = await this.prisma.providerCategory.findUnique({
      where: { id },
    });
    return providersCategory;
  }

  async update(
    id: number,
    data: UpdateProvidersCategoryInput
  ): Promise<ProvidersCategory> {
    const {
      name,
      periodicCheck,
      requiredInitialQualification,
      requiredPeriodicQualification,
    } = data;
    const providersCategory = await this.prisma.providerCategory.update({
      where: { id },
      data: {
        name,
        periodicCheck,
        requiredInitialQualification,
        requiredPeriodicQualification,
      },
    });
    return providersCategory;
  }

  async remove(id: number): Promise<ProvidersCategory> {
    const providersCategory = await this.prisma.providerCategory.delete({
      where: { id },
    });
    return providersCategory;
  }
}
