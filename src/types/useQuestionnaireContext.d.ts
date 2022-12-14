import type { IQuestionnaireContext, QuestionPlusAnswer } from './questionnaire';

export interface IUseQuestionnaireContextReturn {
    hasAllAnswers: boolean;
    getQuestion: (questionId: number) => Question | null;
    setAnswer: (answer: Answer) => void;
    isAnswered: (questionId: number) => boolean;
    setQuestions: (questions: Question[]) => void;
    setAnswers: (answers: Answer[]) => void;
    getAnswer: (questionId: number) => Answer | null;
    compileAnswers: () => QuestionPlusAnswer[];
}

export interface IUseQuestionnaireContext {
    (): IUseQuestionnaireContextReturn
}