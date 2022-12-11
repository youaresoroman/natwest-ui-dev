import React, { FC, useEffect } from "react";
import { ScreenComponentProps } from "@/types/screens";
import { QuestionBody, QuestionButtons, QuestionnaireWindow, QuestionTitle } from "@/components";
import { useQuestionnaireContext } from "@/hooks";

/**
 * @name FinalScreen
 * @description This is a component that renders a final screen
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <FinalScreen>
 *   <h1>You have reached the end of the questionnaire</h1>
 * </FinalScreen>
 */

export const FinalScreen: FC<Pick<ScreenComponentProps, 'goPrev'>> = ({ goPrev }) => {
    const { answers, questions } = useQuestionnaireContext();

    useEffect(() => {
        console.log('final answers', answers);
    }, [answers]);

    return (
        <QuestionnaireWindow>
            <QuestionTitle subTitle="Let's look on the answers">You have reached the end of the questionnaire</QuestionTitle>
            <QuestionBody>{answers.map(({ id, value }, index) => (
                <p key={`${value}-${index}`}>{questions[id].question} - {value}</p>
            ))}</QuestionBody>
            <QuestionButtons goPrev={goPrev} goNext={null} hideNext />
        </QuestionnaireWindow>
    )
}