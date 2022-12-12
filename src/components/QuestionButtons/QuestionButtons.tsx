import React from 'react';
import classnames from 'classnames';
import { QuestionButton } from '@/components';
import type { IQuestionButtons } from '@/types/questionButtons';
import styles from './QuestionButtons.module.scss';

/**
 * @name QuestionButtons
 * @description This is a component that renders the buttons for the question
 * @param {() => void} goNext - This is the function to go to the next question
 * @param {() => void} goPrev - This is the function to go to the previous question
 * @returns {JSX.Element} - This is the component
 * @example
 * <QuestionButtons goNext={goNext} goPrev={goPrev} />
 */

export const QuestionButtons: IQuestionButtons = ({ goNext, goPrev, hideNext, hidePrev, isLast, isFinalScreen }) => {
    return (
        <div className={styles.QuestionButtons}>
            <div className={classnames(styles.side, styles.left)}>
                {!hidePrev && <QuestionButton onClick={goPrev}>{!isFinalScreen ? 'Back' : 'Start Again'}</QuestionButton>}
            </div>
            <div className={classnames(styles.side, styles.right)}>
                {!hideNext && <QuestionButton onClick={goNext}>{!isLast ? 'Next' : 'Finish'}</QuestionButton>}
            </div>
        </div>
    )
}