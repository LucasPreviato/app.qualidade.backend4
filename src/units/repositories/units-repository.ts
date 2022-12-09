import { CreateUnitInput } from '../dto/create-unit.input';
import { UpdateUnitInput } from '../dto/update-unit.input';
import { Unit } from '../entities/unit.entity';

export abstract class UnitsRepository {
  abstract create({ name, email, phone }: CreateUnitInput): Promise<Unit>;

  abstract findAll(): Promise<Unit[]>;

  abstract findOne(id: number): Promise<Unit | null>;

  abstract update(
    id: number,
    { name, email, phone }: UpdateUnitInput,
  ): Promise<Unit>;

  abstract remove(id: number): Promise<Unit>;

  abstract resolveGetUnit(id: number): Promise<Unit>;
}
