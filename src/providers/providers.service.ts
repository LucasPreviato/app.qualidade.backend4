import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';
import { ProvidersRepository } from './repositories/providers.repository';

@Injectable()
export class ProvidersService {
  constructor(private providersRepository: ProvidersRepository) {}
  async create(createProviderInput: CreateProviderInput) {
    const newProvider = await this.providersRepository.create(
      createProviderInput
    );
    return newProvider;
  }

  async findAll() {
    const providers = await this.providersRepository.findAll();
    return providers;
  }

  async findOne(id: number) {
    const provider = await this.providersRepository.findOne(id);
    if (!provider) {
      throw new InputNotFoundException(id);
    }
    return provider;
  }

  async update(id: number, updateProviderInput: UpdateProviderInput) {
    const updatedProvider = await this.providersRepository.update(
      id,
      updateProviderInput
    );
    if (!updatedProvider) {
      throw new InputNotFoundException(id);
    }
    return updatedProvider;
  }

  async remove(id: number) {
    const deletedProvider = await this.providersRepository.remove(id);
    if (!deletedProvider) {
      throw new InputNotFoundException(id);
    }
    return deletedProvider;
  }
}
