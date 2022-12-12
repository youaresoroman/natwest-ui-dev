import React, { useMemo } from 'react';
import { useQuestionnaireContext } from '@/hooks';
import type { IScreen } from '@/types/screens';
import { QuestionnaireWindow, QuestionTitle, QuestionButtons, QuestionBody, Input } from "@/components";

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

export const Question: IScreen = ({ current, isLast, goNext, goPrev }) => {
    const { getQuestion, setAnswer, getAnswer, hasAllAnswers } = useQuestionnaireContext();

    const question = getQuestion(current);
    const answer = getAnswer(current);

    const onChange = (value: string) => setAnswer({ id: current, value });

    return (
        <QuestionnaireWindow>
            <QuestionTitle>{question?.question}</QuestionTitle>
            <QuestionBody>
                <Input onChange={onChange} type={question?.type || 'text'} defaultValue={answer?.value} options={question?.options} />
            </QuestionBody>
            <QuestionButtons goNext={goNext} goPrev={goPrev} hideNext={isLast && !hasAllAnswers} isLast={isLast} />
        </QuestionnaireWindow>
    )
}