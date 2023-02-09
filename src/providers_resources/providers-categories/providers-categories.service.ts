import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateProvidersCategoryInput } from './dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from './dto/update-providers-category.input';
import { ProvidersCategoryRepository } from './repositories/providers-categories.repository';

@Injectable()
export class ProvidersCategoriesService {
  constructor(
    private providersCategoryRepository: ProvidersCategoryRepository
  ) {}
  async create(createProvidersCategoryInput: CreateProvidersCategoryInput) {
    const newProvidersCategory = await this.providersCategoryRepository.create(
      createProvidersCategoryInput
    );
    return newProvidersCategory;
  }

  async findAll() {
    const providersCategories =
      await this.providersCategoryRepository.findAll();
    return providersCategories;
  }

  async findOne(id: number) {
    const providersCategory = await this.providersCategoryRepository.findOne(
      id
    );
    if (!providersCategory) {
      throw new InputNotFoundException(id);
    }
    return providersCategory;
  }

  async update(
    id: number,
    updateProvidersCategoryInput: UpdateProvidersCategoryInput
  ) {
    const updateProvidersCategory =
      await this.providersCategoryRepository.update(
        id,
        updateProvidersCategoryInput
      );
    if (!updateProvidersCategory) {
      throw new InputNotFoundException(id);
    }
    return updateProvidersCategory;
  }

  async remove(id: number) {
    const providersCategory = await this.providersCategoryRepository.delete(id);
    if (!providersCategory) {
      throw new InputNotFoundException(id);
    }
    return providersCategory;
  }
}
