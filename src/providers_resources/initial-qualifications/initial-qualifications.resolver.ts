import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InitialQualificationsService } from './initial-qualifications.service';
import { InitialQualification } from './entities/initial-qualification.entity';
import { CreateInitialQualificationInput } from './dto/create-initial-qualification.input';
import { UpdateInitialQualificationInput } from './dto/update-initial-qualification.input';

@Resolver(() => InitialQualification)
export class InitialQualificationsResolver {
  constructor(
    private readonly initialQualificationsService: InitialQualificationsService
  ) {}

  @Mutation(() => InitialQualification)
  createInitialQualification(
    @Args('createInitialQualificationInput')
    createInitialQualificationInput: CreateInitialQualificationInput
  ) {
    return this.initialQualificationsService.create(
      createInitialQualificationInput
    );
  }

  @Query(() => [InitialQualification], { name: 'initialQualifications' })
  findAll() {
    return this.initialQualificationsService.findAll();
  }

  @Query(() => InitialQualification, { name: 'initialQualification' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.initialQualificationsService.findOne(id);
  }

  @Mutation(() => InitialQualification)
  updateInitialQualification(
    @Args('updateInitialQualificationInput')
    updateInitialQualificationInput: UpdateInitialQualificationInput
  ) {
    return this.initialQualificationsService.update(
      updateInitialQualificationInput.id,
      updateInitialQualificationInput
    );
  }

  @Mutation(() => InitialQualification)
  removeInitialQualification(@Args('id', { type: () => Int }) id: number) {
    return this.initialQualificationsService.remove(id);
  }
}
