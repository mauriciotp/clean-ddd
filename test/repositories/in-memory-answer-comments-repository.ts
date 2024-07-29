import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComment[] = []

  async findById(id: string) {
    const answerQuestion = this.items.find((item) => item.id.toString() === id)

    if (!answerQuestion) {
      return null
    }

    return answerQuestion
  }

  async create(comment: AnswerComment) {
    this.items.push(comment)
  }

  async delete(answerComment: AnswerComment) {
    const answerQuestionIndex = this.items.findIndex(
      (item) => item.id === answerComment.id,
    )

    this.items.splice(answerQuestionIndex, 1)
  }
}
