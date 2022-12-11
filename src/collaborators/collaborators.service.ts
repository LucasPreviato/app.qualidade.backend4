import { Injectable } from '@nestjs/common';
import { InputNotFoundException } from 'src/errors/input-not-found-exception';
import { CreateCollaboratorInput } from './dto/create-collaborator.input';
import { UpdateCollaboratorInput } from './dto/update-collaborator.input';
import { CollaboratorsRepository } from './repositories/collaborators-repository';

@Injectable()
export class CollaboratorsService {
  constructor(private collaboratorsRepository: CollaboratorsRepository) {}
  async create({
    name,
    email,
    phone,
    departmentId,
    unitId,
  }: CreateCollaboratorInput) {
    return await this.collaboratorsRepository.create({
      name,
      email,
      phone,
      departmentId,
      unitId,
    });
  }

  async findAll() {
    return await this.collaboratorsRepository.findAll();
  }

  async findOne(id: number) {
    const collaborator = await this.collaboratorsRepository.findOne(id);
    if (!collaborator) {
      throw new InputNotFoundException(id);
    }
    return collaborator;
  }

  async update(
    id: number,
    { name, email, phone, departmentId, unitId }: UpdateCollaboratorInput,
  ) {
    const updateCollaborator = await this.collaboratorsRepository.update(id, {
      id,
      name,
      email,
      phone,
      departmentId,
      unitId,
    });
    return updateCollaborator;
  }

  async remove(id: number) {
    const existingCollaborator = await this.collaboratorsRepository.findOne(id);
    if (!existingCollaborator) {
      throw new InputNotFoundException(id);
    }
    return await this.collaboratorsRepository.remove(id);
  }
}
