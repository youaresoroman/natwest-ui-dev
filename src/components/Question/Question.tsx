import React from 'react';
import { useQuestionnaireContext } from '@/hooks';
import type { IScreen } from '@/types/screens';
import { QuestionnaireWindow, QuestionTitle, QuestionButtons, QuestionBody } from "@/components";

/**
 * @name Question
 * @description This is a component that renders a question
 * @param {number} current - This is the current question number
 * @param {() => void} goNext - This is the function to go to the next question
 * @param {() => void} goPrev - This is the function to go to the previous question
 * @returns {JSX.Element} - This is the component
 * @example
 * <Question current={current} goNext={goNext} goPrev={goPrev} />
 */

export const Question: IScreen = ({ current, goNext, goPrev }) => {
    const { getQuestion } = useQuestionnaireContext();
    const question = getQuestion(current);

    return (
        <QuestionnaireWindow>
            <QuestionTitle>{question?.question}</QuestionTitle>
            <QuestionBody>{current}</QuestionBody>
            <QuestionButtons goNext={goNext} goPrev={goPrev} />
        </QuestionnaireWindow>
    )
}