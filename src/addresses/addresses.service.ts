import { Injectable } from '@nestjs/common';
import { PrismaAddressesRepository } from './repositories/implementations/prisma.repository';

@Injectable()
export class AddressesService {
  constructor(private addressRepository: PrismaAddressesRepository) {}

  async findAll() {
    const addresses = await this.addressRepository.findAll();
    return addresses;
  }

  async findOne(id: number) {
    const address = await this.addressRepository.findOne(id);
    return address;
  }

  async remove(id: number) {
    const address = await this.addressRepository.remove(id);
    return address;
  }
}
