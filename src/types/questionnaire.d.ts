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
  type: 'text' | 'option' | 'switch' | 'number';
  options?: InputOption[]
};

export interface IQuestionnaireContext {
  questions: Question[];
  answers: Answer[];
  setAnswers: SetStateDispatch<Answer[]>;
  setQuestions: SetStateDispatch<Question[]>;
}
