import { NotFoundException } from '@nestjs/common';

export class InputNotFoundException extends NotFoundException {
  constructor(inputID: number) {
    super(`Input with ID ${inputID} not found`);
  }
}
