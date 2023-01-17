import { CreateProvidersCategoryInput } from '../dto/create-providers-category.input';
import { UpdateProvidersCategoryInput } from '../dto/update-providers-category.input';
import { ProvidersCategory } from '../entities/providers-category.entity';

export abstract class ProvidersCategoriesRepository {
  abstract create({
    name,
    periodicCheck,
    requiredInitialQualification,
    requiredPeriodicQualification,
  }: CreateProvidersCategoryInput): Promise<ProvidersCategory>;
  abstract findAll(): Promise<ProvidersCategory[]>;
  abstract findOne(id: number): Promise<ProvidersCategory>;
  abstract update(
    id: number,
    {
      name,
      periodicCheck,
      requiredInitialQualification,
      requiredPeriodicQualification,
    }: UpdateProvidersCategoryInput
  ): Promise<ProvidersCategory>;
  abstract remove(id: number): Promise<ProvidersCategory>;
}
