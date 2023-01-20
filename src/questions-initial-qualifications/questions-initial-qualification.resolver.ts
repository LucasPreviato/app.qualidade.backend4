import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionsinitialqualificationsService } from './questionsinitialqualifications.service';
import { QuestionsInitialQualification } from './entities/questions-initial-qualification.entity';
import { CreateQuestionsinitialqualificationInput } from './dto/create-questions-initial-qualification.input';
import { UpdateQuestionsinitialqualificationInput } from './dto/update-questions-initial-qualification.input';

@Resolver(() => QuestionsInitialQualification)
export class QuestionsinitialqualificationsResolver {
  constructor(
    private readonly questionsinitialqualificationsService: QuestionsinitialqualificationsService
  ) {}

  @Mutation(() => QuestionsInitialQualification)
  createQuestionsinitialqualification(
    @Args('createQuestionsinitialqualificationInput')
    createQuestionsinitialqualificationInput: CreateQuestionsinitialqualificationInput
  ) {
    return this.questionsinitialqualificationsService.create(
      createQuestionsinitialqualificationInput
    );
  }

  @Query(() => [QuestionsInitialQualification], {
    name: 'questionsinitialqualifications',
  })
  findAll() {
    return this.questionsinitialqualificationsService.findAll();
  }

  @Query(() => QuestionsInitialQualification, {
    name: 'questionsinitialqualification',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.questionsinitialqualificationsService.findOne(id);
  }

  @Mutation(() => QuestionsInitialQualification)
  updateQuestionsinitialqualification(
    @Args('updateQuestionsinitialqualificationInput')
    updateQuestionsinitialqualificationInput: UpdateQuestionsinitialqualificationInput
  ) {
    return this.questionsinitialqualificationsService.update(
      updateQuestionsinitialqualificationInput.id,
      updateQuestionsinitialqualificationInput
    );
  }

  @Mutation(() => QuestionsInitialQualification)
  removeQuestionsinitialqualification(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.questionsinitialqualificationsService.remove(id);
  }
}
