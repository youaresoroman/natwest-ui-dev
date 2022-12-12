import type { Answer, IQuestionnaireContext} from '@/types/questionnaire';

export const checkIsAnswered = (questionId: number, answers: IQuestionnaireContext['answers']) => {
    return answers.some((answer) => answer.id === questionId);
}

export const setAnswerValue = (answer: Answer, answers: IQuestionnaireContext['answers']) => {
    const newAnswers = answers.filter((item) => item.id !== answer.id);
    if (answer.value !== '') {
        return [...newAnswers, answer]
    }
    return [...newAnswers]
}

export const doCompileAnswers = (answers: IQuestionnaireContext['answers'], questions: IQuestionnaireContext['questions']) => {
    const answerRecords = answers.filter(({ id }) => questions[id] !== undefined);
    const compiledAnswers = answerRecords.map(({ id, value }) => {
        const { question, type, short } = questions[id];
        return { id, question, type, value, short };
    });

    return compiledAnswers;
}