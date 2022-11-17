import { Unit } from 'src/units/entities/unit.entity';

export default class ValidUnit {
  static giveMeAValidUnit(): Unit {
    const unit = new Unit();
    unit.id = 1;
    unit.name = 'Unit 1';
    unit.email = 'unit1@email.com';
    unit.phone = '1234567890';

    return unit;
  }
}
