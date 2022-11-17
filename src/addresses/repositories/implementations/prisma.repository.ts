import { Injectable } from '@nestjs/common';
import { CreateAddressInput } from 'src/addresses/dto/create-address.input';
import { UpdateAddressInput } from 'src/addresses/dto/update-address.input';
import { Address } from 'src/addresses/entities/address.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { IAddressesRepository } from '../addresses.repository';

@Injectable()
export class PrismaAddressesRepository implements IAddressesRepository {
  constructor(private prisma: PrismaService) {}

  async create({
    city,
    street,
    number,
    complement,
    district,
    cep,
    uf,
  }: CreateAddressInput): Promise<Address> {
    const address = await this.prisma.address.create({
      data: {
        city,
        street,
        number,
        complement,
        district,
        cep,
        uf,
      },
    });
    return address;
  }

  async findAll(): Promise<Address[]> {
    const addresses = await this.prisma.address.findMany();
    return addresses;
  }

  async findOne(id: number): Promise<Address | null> {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });
    return address;
  }

  async update(
    id: number,
    updateAddressInput: UpdateAddressInput,
  ): Promise<Address> {
    return this.prisma.address.update({
      where: { id },
      data: updateAddressInput,
    });
  }
  async remove(id: number): Promise<void> {
    await this.prisma.address.delete({
      where: { id },
    });
  }
}
