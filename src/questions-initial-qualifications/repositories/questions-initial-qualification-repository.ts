import { CreateQuestionsinitialqualificationInput } from '../dto/create-questions-initial-qualification.input';
import { UpdateQuestionsinitialqualificationInput } from '../dto/update-questions-initial-qualification.input';
import { QuestionsInitialQualification } from '../entities/questions-initial-qualification.entity';

export abstract class QuestionsInitialQualificationRepository {
  abstract create({
    question,
    typeOfAnswer,
    providersCategoryId,
  }: CreateQuestionsinitialqualificationInput): Promise<QuestionsInitialQualification>;

  abstract findAll(): Promise<QuestionsInitialQualification[]>;

  abstract findOne(id: number): Promise<QuestionsInitialQualification | null>;

  abstract update(
    id: number,
    { question }: UpdateQuestionsinitialqualificationInput
  ): Promise<QuestionsInitialQualification>;

  abstract remove(id: number): Promise<QuestionsInitialQualification>;
}
