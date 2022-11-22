import { CreateUnitInput } from 'src/units/dto/create-unit.input';
import { UpdateUnitInput } from 'src/units/dto/update-unit.input';
import { Unit } from 'src/units/entities/unit.entity';

export interface IUnitsRepository {
  create(createUnitInput: CreateUnitInput): Promise<Unit>;
  findAll(): Promise<Unit[]>;
  findOne(id: number): Promise<Unit>;
  update(id: number, updateUnitInput: UpdateUnitInput): Promise<Unit>;
  remove(id: number): Promise<void>;
}
