import React, { FC, PropsWithChildren } from 'react';
import styles from './QuestionBody.module.scss';

/**
 * @name QuestionBody
 * @description This is a component that renders a body of the question
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <QuestionBody>
 *   <h1>Some question</h1>
 * </QuestionBody>
 */

export const QuestionBody: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={styles.QuestionBody}>
            {children}
        </div>
    )
}