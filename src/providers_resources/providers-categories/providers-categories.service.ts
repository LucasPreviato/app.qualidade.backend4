import { Injectable } from '@nestjs/common';
import { CreateProvidersCategoryInput } from './dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from './dto/update-providers-category.input';

@Injectable()
export class ProvidersCategoriesService {
  create(createProvidersCategoryInput: CreateProvidersCategoryInput) {
    return 'This action adds a new providersCategory';
  }

  findAll() {
    return `This action returns all providersCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} providersCategory`;
  }

  update(
    id: number,
    updateProvidersCategoryInput: UpdateProvidersCategoryInput
  ) {
    return `This action updates a #${id} providersCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} providersCategory`;
  }
}
