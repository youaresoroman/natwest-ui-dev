import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import type { Answer, IQuestionnaireContext, Question } from '@/types/questionnaire';
import { initalContextValue } from '@/constants/questionnaireContext';

export const QuestionnaireContext = createContext<IQuestionnaireContext>(initalContextValue);

/**
 * @name QuestionnaireProvider
 * @description This is a component that provides the context for the questionnaire
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <QuestionnaireProvider>
 *  <Questionnaire />
 * </QuestionnaireProvider>
 */

export const QuestionnaireProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        console.log('answers', answers);
    }, [answers]);

    useEffect(() => {
        console.log('questions', questions);
    }, [questions]);

    return (
        <QuestionnaireContext.Provider value={{ answers, questions, setAnswers, setQuestions }}>
            {children}
        </QuestionnaireContext.Provider>
    )
}