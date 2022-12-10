export interface IUseQuestionnaireContextReturn extends IQuestionnaireContext {
    getQuestion: (questionId: number) => Question | null;
    setAnswer: (answer: Answer) => void;
    isAnswered: (questionId: number) => boolean;
}

export interface IUseQuestionnaireContext {
    (): IUseQuestionnaireContextReturn
}