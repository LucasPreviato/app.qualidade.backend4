import { CreateQuestionsPeriodicQualificationInput } from '../dto/create-questions-periodic-qualification.input';
import { UpdateQuestionsPeriodicQualificationInput } from '../dto/update-questions-periodic-qualification.input';
import { QuestionsPeriodicQualification } from '../entities/questions-periodic-qualification.entity';

export abstract class QuestionsPeriodicQualificationsRepository {
  abstract create({
    question,
    typeOfAnswer,
    providersCategoryId,
  }: CreateQuestionsPeriodicQualificationInput): Promise<QuestionsPeriodicQualification>;

  abstract findAll(): Promise<QuestionsPeriodicQualification[]>;

  abstract findOne(id: number): Promise<QuestionsPeriodicQualification | null>;

  abstract update(
    id: number,
    { question }: UpdateQuestionsPeriodicQualificationInput
  ): Promise<QuestionsPeriodicQualification>;
  abstract remove(id: number): Promise<QuestionsPeriodicQualification>;
}
