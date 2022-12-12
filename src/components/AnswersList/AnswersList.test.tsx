import React, { FC, useEffect } from "react";
import { AnswersList } from "@/components";
import "@testing-library/jest-dom/extend-expect";
import { QuestionnaireProvider } from "@/context/questionnaireContext";
import { render, screen } from "@testing-library/react";
import { useQuestionnaireContext } from "@/hooks";
import { Answer, Question } from "@/types/questionnaire";

interface CaseProps {
    case: {
        answers: Answer[];
        questions: Question[]
    }
}

const SetterComponent: FC<CaseProps> = ({ case: { answers, questions } }) => {
    const { setAnswers, setQuestions } = useQuestionnaireContext();

    useEffect(() => {
        setAnswers(answers);
        setQuestions(questions);
    }, [answers, questions, setAnswers, setQuestions]);

    return (<AnswersList />);
}

const Wrapper: FC<CaseProps> = ({ case: { answers, questions } }) => (
    <QuestionnaireProvider>
        <SetterComponent case={{ answers, questions }} />
    </QuestionnaireProvider>
);

describe("AnswersList", () => {
    it("should render a list of answers", () => {
        render(<Wrapper case={{
            answers: [
                {
                  id: 0,
                  value: "test"
                }
              ],
            questions: [
                {
                    id: 1,
                    question: "What is your name?",
                    short: "name",
                    type: "text"
                },
                {
                    id: 2,
                    question: "How ofter do you ... ?",
                    short: "often",
                    type: "radio"
                },
                {
                    id: 3,
                    question: "What is your favorite color?",
                    short: "color",
                    type: "option",
                    options: [
                        {
                            id: 1,
                            label: "Red",
                            value: "red"
                        },
                        {
                            id: 2,
                            label: "Green",
                            value: "green"
                        },
                        {
                            id: 3,
                            label: "Blue",
                            value: "blue"
                        },
                        {
                            id: 4,
                            label: "Yellow",
                            value: "yellow"
                        },
                        {
                            id: 5,
                            label: "Black",
                            value: "black"
                        },
                        {
                            id: 6,
                            label: "White",
                            value: "white"
                        },
                        {
                            id: 7,
                            label: "Orange",
                            value: "orange"
                        },
                        {
                            id: 8,
                            label: "Purple",
                            value: "purple"
                        },
                        {
                            id: 9,
                            label: "Pink",
                            value: "pink"
                        }
                    ]
                }
            ]
        }} />);
        expect(screen.getByTestId("AnswersList")).toBeInTheDocument();
        expect(screen.queryAllByTestId("AnswerItem")?.length).toEqual(1);
    });
    it("should not render list without answers", () => {
        render(<Wrapper case={{
            answers: [],
            questions: []
        }} />);
        expect(screen.queryAllByTestId("AnswerItem")?.length).toEqual(0);
    });
});