import { CreateProviderInput } from '../dto/create-provider.input';
import { UpdateProviderInput } from '../dto/update-provider.input';
import { Provider } from '../entities/provider.entity';

export abstract class ProvidersRepository {
  abstract create({
    name,
    tradeName,
    address,
    district,
    city,
    state,
    zipCode,
    cnpj,
    crm,
    providerCritical,
    contactName,
    email,
    phone,
    website,
  }: CreateProviderInput): Promise<Provider>;
  abstract findAll(): Promise<Provider[]>;
  abstract findOne(id: number): Promise<Provider | null>;
  abstract update(
    id: number,
    {
      name,
      tradeName,
      address,
      district,
      city,
      state,
      zipCode,
      cnpj,
      crm,
      providerCritical,
      contactName,
      email,
      phone,
      website,
    }: UpdateProviderInput
  ): Promise<Provider>;
  abstract remove(id: number): Promise<Provider>;
}