import React, { FC } from "react";
import { AnswerItem } from "@/components";
import styles from "./AnswersList.module.scss";
import { useQuestionnaireContext } from "@/hooks";

/**
 * @name AnswersList
 * @description This is a component that renders a list of answers
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <AnswersList />
 */

export const AnswersList: FC = () => {
    const { compileAnswers } = useQuestionnaireContext();

    const answers = compileAnswers();

    return (
        <div className={styles.AnswerList} data-testid="AnswersList">
            {answers.map(({ id, value, question }, index) => (
                <AnswerItem key={`${value}-${index}`} id={id} question={question} value={value} />
            ))}
        </div>
    );
};