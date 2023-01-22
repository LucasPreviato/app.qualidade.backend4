import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionsPeriodicQualificationsService } from './questions-periodic-qualifications.service';
import { QuestionsPeriodicQualification } from './entities/questions-periodic-qualification.entity';
import { CreateQuestionsPeriodicQualificationInput } from './dto/create-questions-periodic-qualification.input';
import { UpdateQuestionsPeriodicQualificationInput } from './dto/update-questions-periodic-qualification.input';

@Resolver(() => QuestionsPeriodicQualification)
export class QuestionsPeriodicQualificationsResolver {
  constructor(
    private readonly questionsPeriodicQualificationsService: QuestionsPeriodicQualificationsService
  ) {}

  @Mutation(() => QuestionsPeriodicQualification)
  createQuestionsPeriodicQualification(
    @Args('createQuestionsPeriodicQualificationInput')
    createQuestionsPeriodicQualificationInput: CreateQuestionsPeriodicQualificationInput
  ) {
    return this.questionsPeriodicQualificationsService.create(
      createQuestionsPeriodicQualificationInput
    );
  }

  @Query(() => [QuestionsPeriodicQualification], {
    name: 'questionsPeriodicQualifications',
  })
  findAll() {
    return this.questionsPeriodicQualificationsService.findAll();
  }

  @Query(() => QuestionsPeriodicQualification, {
    name: 'questionsPeriodicQualification',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.questionsPeriodicQualificationsService.findOne(id);
  }

  @Mutation(() => QuestionsPeriodicQualification)
  updateQuestionsPeriodicQualification(
    @Args('updateQuestionsPeriodicQualificationInput')
    updateQuestionsPeriodicQualificationInput: UpdateQuestionsPeriodicQualificationInput
  ) {
    return this.questionsPeriodicQualificationsService.update(
      updateQuestionsPeriodicQualificationInput.id,
      updateQuestionsPeriodicQualificationInput
    );
  }

  @Mutation(() => QuestionsPeriodicQualification)
  removeQuestionsPeriodicQualification(
    @Args('id', { type: () => Int }) id: number
  ) {
    return this.questionsPeriodicQualificationsService.remove(id);
  }
}
