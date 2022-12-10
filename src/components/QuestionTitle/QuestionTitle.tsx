import React, { FC, ReactNode } from 'react';
import styles from './QuestionTitle.module.scss';

// generate documentation for this component
/**
 * @name QuestionTitle
 * @description This is a component that renders a title for the question
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <QuestionTitle>
 *   Question Title
 * </QuestionTitle>
 */

export const QuestionTitle: FC<{ children: ReactNode, subTitle?: string }> = ({ children, subTitle }) => {
    return (
        <div className={styles.QuestionTitle}>
            <h1 >{children}</h1>
            {subTitle && <h3 className={styles.QuestionSubTitle}>{subTitle}</h3>}
        </div>
    )
}
