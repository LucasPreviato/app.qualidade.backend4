import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InitialQualificationAnswersService } from './initial-qualification-answers.service';
import { InitialQualificationAnswer } from './entities/initial-qualification-answer.entity';
import { CreateInitialQualificationAnswerInput } from './dto/create-initial-qualification-answer.input';
import { UpdateInitialQualificationAnswerInput } from './dto/update-initial-qualification-answer.input';

@Resolver(() => InitialQualificationAnswer)
export class InitialQualificationAnswersResolver {
  constructor(
    private readonly initialQualificationAnswersService: InitialQualificationAnswersService
  ) {}

  @Mutation(() => InitialQualificationAnswer)
  createInitialQualificationAnswer(
    @Args('createInitialQualificationAnswerInput')
    createInitialQualificationAnswerInput: CreateInitialQualificationAnswerInput
  ) {
    return this.initialQualificationAnswersService.create(
      createInitialQualificationAnswerInput
    );
  }

  @Query(() => [InitialQualificationAnswer], {
    name: 'initialQualificationAnswers',
  })
  findAll() {
    return this.initialQualificationAnswersService.findAll();
  }

  @Query(() => InitialQualificationAnswer, {
    name: 'initialQualificationAnswer',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.initialQualificationAnswersService.findOne(id);
  }

  @Mutation(() => InitialQualificationAnswer)
  updateInitialQualificationAnswer(
    @Args('updateInitialQualificationAnswerInput')
    updateInitialQualificationAnswerInput: UpdateInitialQualificationAnswerInput
  ) {
    return this.initialQualificationAnswersService.update(
      updateInitialQualificationAnswerInput.id,
      updateInitialQualificationAnswerInput
    );
  }

  @Mutation(() => InitialQualificationAnswer)
  removeInitialQualificationAnswer(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.initialQualificationAnswersService.remove(id);
  }
}
