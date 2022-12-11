import { Question, Answer } from "@/types/questionnaire";
import React from "react";
import styles from "./AnswerItem.module.scss";

interface AnswerItemProps {
    id: number;
    question: Question['question'];
    value: Answer['value'];
}

export const AnswerItem: React.FC<AnswerItemProps> = ({
    id,
    question,
    value,
}) => {
    return <div className={styles.AnswerItem}>{id}# {question} - {value}</div>;
};