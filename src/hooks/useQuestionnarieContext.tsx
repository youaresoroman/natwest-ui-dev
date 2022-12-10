import { useCallback } from 'react';
import type { Answer } from '@/types/questionnaire';
import type { IUseQuestionnaireContext } from '@/types/useQuestionnaireContext';
import { checkIsAnswered, setAnswerValue } from '@/utils/questionnarie';
import { useGetQuestionnaireContext } from './useGetQuestionnaireContext';

/**
 * @name useQuestionnaireContext
 * @description This is a hook that returns the utility functions for the questionnaire
 * @returns {IQuestionnaireContext} - This is the context for the questionnaire
 * @returns {
 * answers: Answer[],
 * questions: Question[],
 * setQuestions: (questions: Question[]) => void,
 * getQuestion: (id: number) => Question | null,
 * setAnswer: (answer: Answer) => void,
 * isAnswered: (id: number) => boolean,
 * }
 * @example
 * const { answers, questions, setQuestions, setAnswer, isAnswered, getQuestion } = useQuestionnaireContext();
 */

export const useQuestionnaireContext: IUseQuestionnaireContext = () => {
    const { answers, questions, setAnswers, setQuestions } = useGetQuestionnaireContext();

    const setAnswer = (answer: Answer) => setAnswers((prev: Answer[]) => setAnswerValue(answer, prev));

    const isAnswered = useCallback((id: number) => checkIsAnswered(id, answers), [answers]);

    const getQuestion = useCallback((id: number) => questions[id] || null, [questions]);

    return { answers, questions, setQuestions, setAnswer, isAnswered, getQuestion };
}