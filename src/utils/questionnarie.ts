import { Answer, IQuestionnaireContext } from '@/types/questionnaire';

export const checkIsAnswered = (questionId: number, answers: IQuestionnaireContext['answers']) => {
    return answers.some((answer) => answer.id === questionId);
}

export const setAnswerValue = (answer: Answer, answers: IQuestionnaireContext['answers']) => {
    const newAnswers = answers.filter((item) => item.id !== answer.id);
    return [...newAnswers, answer]
}