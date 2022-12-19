import { Injectable } from '@nestjs/common';
import { CreatePositionInput } from 'src/positions/dto/create-position.input';
import { UpdatePositionInput } from 'src/positions/dto/update-position.input';
import { Position } from 'src/positions/entities/position.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { PositionsRepository } from '../position-repository';

@Injectable()
export class PrismaPositionRepository implements PositionsRepository {
  constructor(private prisma: PrismaService) {}
  async create({
    name,
    requiredQualifications,
    desiredQualifications,
    requiredEducation,
    desiredEducation,
    requiredExperience,
    desiredExperience,
    version,
    alterations,
    positionCategoryId,
  }: CreatePositionInput): Promise<Position> {
    const newPosition = await this.prisma.position.create({
      data: {
        name,
        requiredQualifications,
        desiredQualifications,
        requiredEducation,
        desiredEducation,
        requiredExperience,
        desiredExperience,
        version,
        alterations,
        positionCategoryId,
      },
      include: { positionCategory: true },
    });
    return newPosition;
  }
  async findAll(): Promise<Position[]> {
    const positions = await this.prisma.position.findMany({
      include: { positionCategory: true },
    });
    return positions;
  }
  async findOne(id: number): Promise<Position> {
    const position = await this.prisma.position.findUnique({
      where: {
        id,
      },
      include: { positionCategory: true },
    });
    return position;
  }
  async update(
    id: number,
    updatePositionInput: UpdatePositionInput,
  ): Promise<Position> {
    const updatePosition = await this.prisma.position.update({
      where: {
        id,
      },
      data: {
        ...updatePositionInput,
      },
      include: { positionCategory: true },
    });
    return updatePosition;
  }
  async remove(id: number): Promise<Position> {
    return await this.prisma.position.delete({
      where: {
        id,
      },
      include: { positionCategory: true },
    });
  }
}
