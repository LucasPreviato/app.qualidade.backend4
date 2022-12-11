import { CreateCollaboratorInput } from '../dto/create-collaborator.input';
import { UpdateCollaboratorInput } from '../dto/update-collaborator.input';
import { Collaborator } from '../entities/collaborator.entity';

export abstract class CollaboratorsRepository {
  abstract create({
    name,
    email,
    phone,
    departmentId,
    unitId,
  }: CreateCollaboratorInput): Promise<Collaborator>;

  abstract findAll(): Promise<Collaborator[]>;

  abstract findOne(id: number): Promise<Collaborator | null>;

  abstract update(
    id: number,
    { name, email, phone, departmentId, unitId }: UpdateCollaboratorInput,
  ): Promise<Collaborator>;

  abstract remove(id: number): Promise<Collaborator>;
}
