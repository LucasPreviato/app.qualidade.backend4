import { Injectable } from '@nestjs/common';
import { CreateCollaboratorInput } from 'src/collaborators/dto/create-collaborator.input';
import { UpdateCollaboratorInput } from 'src/collaborators/dto/update-collaborator.input';
import { Collaborator } from 'src/collaborators/entities/collaborator.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CollaboratorsRepository } from '../collaborators-repository';

@Injectable()
export class PrismaCollaboratorsRepository implements CollaboratorsRepository {
  constructor(private prisma: PrismaService) {}
  async create({
    name,
    email,
    phone,
    departmentId,
    unitId,
  }: CreateCollaboratorInput): Promise<Collaborator> {
    const newCollaborator = await this.prisma.collaborator.create({
      data: {
        name,
        email,
        phone,
        unit: { connect: { id: unitId } },
        department: { connect: { id: departmentId } },
      },
      include: { unit: true, department: true },
    });
    return newCollaborator;
  }
  async findAll(): Promise<Collaborator[]> {
    const collaborators = await this.prisma.collaborator.findMany({
      include: { unit: true, department: true },
    });
    return collaborators;
  }
  async findOne(id: number): Promise<Collaborator> {
    const collaborator = await this.prisma.collaborator.findUnique({
      where: { id },
      include: { unit: true, department: true },
    });
    return collaborator;
  }
  async update(
    id: number,
    { name, email, phone, departmentId, unitId }: UpdateCollaboratorInput,
  ): Promise<Collaborator> {
    const updateCollaborator = await this.prisma.collaborator.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        unit: { connect: { id: unitId } },
        department: { connect: { id: departmentId } },
      },
      include: { unit: true, department: true },
    });
    return updateCollaborator;
  }
  remove(id: number): Promise<Collaborator> {
    return this.prisma.collaborator.delete({
      where: { id },
      include: { unit: true, department: true },
    });
  }
}
