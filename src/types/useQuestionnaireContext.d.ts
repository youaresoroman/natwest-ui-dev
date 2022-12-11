import type { IQuestionnaireContext } from './questionnaire';

export interface IUseQuestionnaireContextReturn {
    answers: IQuestionnaireContext['answers'];
    questions: IQuestionnaireContext['questions'];
    getQuestion: (questionId: number) => Question | null;
    setAnswer: (answer: Answer) => void;
    isAnswered: (questionId: number) => boolean;
    setQuestions: (questions: Question[]) => void;
    setAnswers: (answers: Answer[]) => void;
    getAnswer: (questionId: number) => Answer | null;
}

export interface IUseQuestionnaireContext {
    (): IUseQuestionnaireContextReturn
}