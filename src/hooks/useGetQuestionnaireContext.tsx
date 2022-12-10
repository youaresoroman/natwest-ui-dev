import { useContext } from "react";
import type { IQuestionnaireContext } from "@/types/questionnaire";
import { QuestionnaireContext } from "@/context";

// geneate documentation for this function
/**
 * @name useGetQuestionnaireContext
 * @description This is a hook that returns the utility functions for the questionnaire
 * @returns {IQuestionnaireContext} - This is the context for the questionnaire
 * @returns {
 * answers: Answer[],
 * questions: Question[],
 * setQuestions: (questions: Question[]) => void,
 * setAnswers: (answer: Answer[]) => void,
 * }
 * @example
 * const { answers, questions, setQuestions, setAnswers } = useQuestionnaireContext();
 */

export const useGetQuestionnaireContext = () => {
    const context = useContext(QuestionnaireContext) as IQuestionnaireContext;
    if (context === undefined) {
        throw new Error('useQuestionnaireContext must be used within a QuestionnaireProvider');
    }
    return context;
}