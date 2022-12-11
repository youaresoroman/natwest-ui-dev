import { Answer, Question } from "@/types/questionnaire";
import React from "react";
import { AnswerItem } from "@/components";
import styles from "./AnswersList.module.scss";

interface AnswerListProps {
    answers: Answer[];
    questions: Question[];
}

export const AnswerList: React.FC<AnswerListProps> = ({ answers, questions }) => {
    return (
        <div className={styles.AnswerList}>
            {answers.map(({ id, value }, index) => (
                <AnswerItem key={`${value}-${index}`} id={id} question={questions[id]?.question} value={value} />
            ))}
        </div>
    );
};