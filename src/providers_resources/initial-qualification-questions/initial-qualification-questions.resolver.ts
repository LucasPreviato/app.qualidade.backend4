import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InitialQualificationQuestionsService } from './initial-qualification-questions.service';
import { InitialQualificationQuestion } from './entities/initial-qualification-question.entity';
import { CreateInitialQualificationQuestionInput } from './dto/create-initial-qualification-question.input';
import { UpdateInitialQualificationQuestionInput } from './dto/update-initial-qualification-question.input';

@Resolver(() => InitialQualificationQuestion)
export class InitialQualificationQuestionsResolver {
  constructor(
    private readonly initialQualificationQuestionsService: InitialQualificationQuestionsService
  ) {}

  @Mutation(() => InitialQualificationQuestion)
  createInitialQualificationQuestion(
    @Args('createInitialQualificationQuestionInput')
    createInitialQualificationQuestionInput: CreateInitialQualificationQuestionInput
  ) {
    return this.initialQualificationQuestionsService.create(
      createInitialQualificationQuestionInput
    );
  }

  @Query(() => [InitialQualificationQuestion], {
    name: 'initialQualificationQuestions',
  })
  findAll() {
    return this.initialQualificationQuestionsService.findAll();
  }

  @Query(() => InitialQualificationQuestion, {
    name: 'initialQualificationQuestion',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.initialQualificationQuestionsService.findOne(id);
  }

  @Mutation(() => InitialQualificationQuestion)
  updateInitialQualificationQuestion(
    @Args('updateInitialQualificationQuestionInput')
    updateInitialQualificationQuestionInput: UpdateInitialQualificationQuestionInput
  ) {
    return this.initialQualificationQuestionsService.update(
      updateInitialQualificationQuestionInput.id,
      updateInitialQualificationQuestionInput
    );
  }

  @Mutation(() => InitialQualificationQuestion)
  removeInitialQualificationQuestion(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.initialQualificationQuestionsService.remove(id);
  }
}
