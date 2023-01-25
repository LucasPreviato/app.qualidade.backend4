import { CreateProvidersCategoryInput } from '../dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from '../dto/update-providers-category.input';
import { ProvidersCategory } from '../entities/providers-category.entity';

export abstract class ProvidersCategoryRepository {
  abstract create({
    name,
    requiresInitialQualification,
    requiredPeriodicEvaluation,
    periodicCheck,
  }: CreateProvidersCategoryInput): Promise<ProvidersCategory>;
  abstract findAll(): Promise<ProvidersCategory[]>;
  abstract findOne(id: number): Promise<ProvidersCategory>;
  abstract update(
    id: number,
    updateProvidersCategoryInput: UpdateProvidersCategoryInput
  ): Promise<ProvidersCategory>;
  abstract delete(id: number): Promise<ProvidersCategory>;
}
