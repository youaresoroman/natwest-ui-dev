import React, { FC, PropsWithChildren } from 'react';
import styles from './QuestionBody.module.scss';

export const QuestionBody: FC<PropsWithChildren<unknown>> = () => {
    return (
        <div className={styles.QuestionBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui ea fugit dolores deserunt unde, amet atque vel? Cumque culpa dolorem suscipit, aperiam officia eos dolor minus obcaecati placeat id.
        </div>
    )
}