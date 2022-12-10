import type { IQuestionnaireContext } from "@/types/questionnaire";

export const initalContextValue: IQuestionnaireContext = {
    questions: [],
    answers: [],
    setQuestions: () => { },
    setAnswers: () => { }
}