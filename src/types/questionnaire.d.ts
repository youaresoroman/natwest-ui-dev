import { SetStateAction } from "react";
import type { SetStateDispatch } from "./utility";

export type Answer = {
  id: number;
  value: string;
};

export type Question = {
  id: number;
  question: string;
};

export interface IQuestionnaireContext {
  questions: Question[];
  answers: Answer[];
  setAnswers: SetStateDispatch<Answer[]>;
  setQuestions: SetStateDispatch<Question[]>;
}
