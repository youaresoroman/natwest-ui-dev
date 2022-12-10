import React from 'react';
import type { IQuestionButton } from '@/types/questionButton';
import styles from './QuestionButton.module.scss';

/**
 * @name QuestionButton
 * @description This is a component that renders a button for the question
 * @param {() => void} onClick - This is the function to call when the button is clicked
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <QuestionButton onClick={goPrev}>
 *   Prev
 * </QuestionButton>
 */

export const QuestionButton: IQuestionButton = ({ onClick, children }) => {
    return (
        <button className={styles.QuestionButton} onClick={() => onClick && onClick()} disabled={!onClick}>{children}</button>
    )
}
