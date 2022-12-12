import { Question, Answer } from "@/types/questionnaire";
import React from "react";
import styles from "./AnswerItem.module.scss";

interface AnswerItemProps {
    id: number;
    question: Question['question'];
    short: Question['short'];
    value: Answer['value'];
}

/**
 * @name AnswerItem
 * @description This is a component that renders a answer item
 * @param {number} id - This is the id of the answer
 * @param {string} question - This is the question of the answer
 * @param {string} value - This is the value of the answer
 * @returns {JSX.Element} - This is the component
 * @example
 * <AnswerItem id={1} question="Some question" value="Some value" />
 */

export const AnswerItem: React.FC<AnswerItemProps> = ({
    id,
    short,
    value,
}) => {
    return <div className={styles.AnswerItem} data-testid='AnswerItem'>#{id + 1} - {short} - {value}</div>;
};