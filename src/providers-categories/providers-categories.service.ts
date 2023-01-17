import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateProvidersCategoryInput } from './dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from './dto/update-providers-category.input';
import { ProvidersCategoriesRepository } from './repositories/providers-categories-repository';

@Injectable()
export class ProvidersCategoriesService {
  constructor(
    private providersCategoriesRepository: ProvidersCategoriesRepository
  ) {}
  async create({
    name,
    periodicCheck,
    requiredInitialQualification,
    requiredPeriodicQualification,
  }: CreateProvidersCategoryInput) {
    const providersCategory = await this.providersCategoriesRepository.create({
      name,
      periodicCheck,
      requiredInitialQualification,
      requiredPeriodicQualification,
    });
    return providersCategory;
  }

  async findAll() {
    return await this.providersCategoriesRepository.findAll();
  }

  async findOne(id: number) {
    const providersCategory = await this.providersCategoriesRepository.findOne(
      id
    );
    if (!providersCategory) {
      throw new InputNotFoundException(id);
    }
    return providersCategory;
  }

  async update(
    id: number,
    {
      name,
      periodicCheck,
      requiredInitialQualification,
      requiredPeriodicQualification,
    }: UpdateProvidersCategoryInput
  ) {
    const providersCategory = await this.providersCategoriesRepository.update(
      id,
      {
        id,
        name,
        periodicCheck,
        requiredInitialQualification,
        requiredPeriodicQualification,
      }
    );
    return providersCategory;
  }

  async remove(id: number) {
    const existingProvidersCategory =
      await this.providersCategoriesRepository.findOne(id);
    if (!existingProvidersCategory) {
      throw new InputNotFoundException(id);
    }
    return await this.providersCategoriesRepository.remove(id);
  }
}
