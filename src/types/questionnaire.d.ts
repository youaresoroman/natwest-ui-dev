import { SetStateAction } from "react";
import type { SetStateDispatch } from "./utility";
import type { InputOption } from "./input";

export type Answer = {
  id: number;
  value: string;
};

export type Question = {
  id: number;
  question: string;
  short: string;
  type: 'text' | 'option' | 'radio';
  options?: InputOption[]
};

export type QuestionPlusAnswer = Omit<Question, 'options'> & Pick<Answer, 'value'>;


export interface IQuestionnaireContext {
  questions: Question[];
  answers: Answer[];
  setAnswers: SetStateDispatch<Answer[]>;
  setQuestions: SetStateDispatch<Question[]>;
}
