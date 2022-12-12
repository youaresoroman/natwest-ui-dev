import { useCallback } from 'react';
import type { Answer } from '@/types/questionnaire';
import type { IUseQuestionnaireContext, IUseQuestionnaireContextReturn } from '@/types/useQuestionnaireContext';
import { checkIsAnswered, setAnswerValue } from '@/utils/questionnarie';
import { useGetQuestionnaireContext } from './useGetQuestionnaireContext';

/**
 * @name useQuestionnaireContext
 * @description This is a custom hook that is used to get the context of the questionnaire
 * @returns {IUseQuestionnaireContextReturn} - This is the context of the questionnaire
 * @example
 * const { answers, questions, setQuestions, setAnswer, setAnswers, isAnswered, getQuestion, getAnswer, compileAnswers } = useQuestionnaireContext();
 */


export const useQuestionnaireContext: IUseQuestionnaireContext = () => {
    const { answers, questions, setAnswers, setQuestions } = useGetQuestionnaireContext();

    const setAnswersList = (answers: Answer[]) => setAnswers(answers);

    const setAnswer = (answer: Answer) => setAnswers((prev: Answer[]) => setAnswerValue(answer, prev));

    const isAnswered = useCallback((id: number) => checkIsAnswered(id, answers), [answers]);

    const getAnswer = useCallback((id: number) => answers.find((answer: Answer) => answer.id === id) || null, [answers]);

    const getQuestion = useCallback((id: number) => questions[id] || null, [questions]);

    const compileAnswers: IUseQuestionnaireContextReturn['compileAnswers'] = useCallback(() => {
        const answerRecords = answers.filter(({id}) => questions[id] !== undefined);
        const compiledAnswers = answerRecords.map(({ id, value }) => {
            const { question, type } = questions[id];
            return { id, question, type, value };
        });

        return compiledAnswers;
    }, [answers, questions]);

    return { answers, questions, setQuestions, setAnswer, setAnswers: setAnswersList, isAnswered, getQuestion, getAnswer, compileAnswers  };
}