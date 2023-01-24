import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InitialQualificationQuestionsTypesService } from './initial-qualification-questions-types.service';
import { InitialQualificationQuestionsType } from './entities/initial-qualification-questions-type.entity';
import { CreateInitialQualificationQuestionsTypeInput } from './dto/create-initial-qualification-questions-type.input';
import { UpdateInitialQualificationQuestionsTypeInput } from './dto/update-initial-qualification-questions-type.input';

@Resolver(() => InitialQualificationQuestionsType)
export class InitialQualificationQuestionsTypesResolver {
  constructor(
    private readonly initialQualificationQuestionsTypesService: InitialQualificationQuestionsTypesService
  ) {}

  @Mutation(() => InitialQualificationQuestionsType)
  createInitialQualificationQuestionsType(
    @Args('createInitialQualificationQuestionsTypeInput')
    createInitialQualificationQuestionsTypeInput: CreateInitialQualificationQuestionsTypeInput
  ) {
    return this.initialQualificationQuestionsTypesService.create(
      createInitialQualificationQuestionsTypeInput
    );
  }

  @Query(() => [InitialQualificationQuestionsType], {
    name: 'initialQualificationQuestionsTypes',
  })
  findAll() {
    return this.initialQualificationQuestionsTypesService.findAll();
  }

  @Query(() => InitialQualificationQuestionsType, {
    name: 'initialQualificationQuestionsType',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.initialQualificationQuestionsTypesService.findOne(id);
  }

  @Mutation(() => InitialQualificationQuestionsType)
  updateInitialQualificationQuestionsType(
    @Args('updateInitialQualificationQuestionsTypeInput')
    updateInitialQualificationQuestionsTypeInput: UpdateInitialQualificationQuestionsTypeInput
  ) {
    return this.initialQualificationQuestionsTypesService.update(
      updateInitialQualificationQuestionsTypeInput.id,
      updateInitialQualificationQuestionsTypeInput
    );
  }

  @Mutation(() => InitialQualificationQuestionsType)
  removeInitialQualificationQuestionsType(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.initialQualificationQuestionsTypesService.remove(id);
  }
}
