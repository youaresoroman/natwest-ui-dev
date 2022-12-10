import React from 'react';
import type { IQuestionnaireWindow } from '@/types/questionnaireWindow';
import styles from './QuestionnaireWindow.module.scss';

/**
 * @name QuestionnaireWindow
 * @description This is a component that renders a window for the questionnaire
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <QuestionnaireWindow>
 *    <h1>Questionnaire</h1>
 * </QuestionnaireWindow>
 */

export const QuestionnaireWindow: IQuestionnaireWindow = ({ children }) => {
    return (
        <div className={styles.QuestionnaireWindow}>
            {children}
        </div>
    )
}
