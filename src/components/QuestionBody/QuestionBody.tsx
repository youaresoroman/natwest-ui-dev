import React, { FC, PropsWithChildren } from 'react';
import styles from './QuestionBody.module.scss';

export const QuestionBody: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return (
        <div className={styles.QuestionBody}>
            {children}
        </div>
    )
}