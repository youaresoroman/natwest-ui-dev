
import React, { useEffect } from 'react';
import { useQuestionnaireContext, useGetQuestions } from '@/hooks';
import { FinalScreen, Screens, Question } from '@/components';
import styles from './Questionnaire.module.scss';

/**
 * @name Questionnaire
 * @description This is a component that renders a questionnaire
 * @param {React.ReactNode} children - This is the children of the component
 * @returns {JSX.Element} - This is the component
 * @example
 * <Questionnaire />
 */

export const Questionnaire = () => {
    const { setQuestions } = useQuestionnaireContext();
    const { data } = useGetQuestions();

    useEffect(() => {
        setQuestions(data || [])
    }, [data]);

    return (
        <div className={styles.Questionnaire}>
            <Screens quantity={data?.length || 0} Screen={Question} FinalScreen={FinalScreen} />
        </div>
    )
}