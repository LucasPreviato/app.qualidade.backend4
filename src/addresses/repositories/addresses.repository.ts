import { Address } from '../entities/address.entity';

export interface IAddressesRepository {
  findAll(): Promise<Address[]>;
  findOne(id: number): Promise<Address>;
  remove(id: number): Promise<void>;
}
