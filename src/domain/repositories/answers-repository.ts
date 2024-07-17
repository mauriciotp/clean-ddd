import { Answer } from "../entities/answer";

interface AnswersRepository {
  create(answer: Answer): Promise<void>
}