import { Answer } from "@/types/questionnaire";

export type CheckIsAnsweredFixture = {
    data: {
        questionId: number;
        answers: Answer[];
    };
    expected: boolean;
}

export type SetAnswerValueFixture = {
    data: {
        answer: Answer;
        answers: Answer[];
    },
    expected: Answer[];
}
export type DataType = {
    checkIsAnsweredFixtures: CheckIsAnsweredFixture[],
    setAnswerValueFixtures: SetAnswerValueFixture[]
}

export const data: DataType = {
    checkIsAnsweredFixtures: [
        {
            data: {
                questionId: 1,
                answers: [
                    {
                        id: 1,
                        value: '1'
                    }
                ]
            },
            expected: true
        },
        {
            data: {
                questionId: 1,
                answers: [
                    {
                        id: 2,
                        value: '1',
                    }
                ]
            },
            expected: false
        }
    ],
    setAnswerValueFixtures: [
        {
            data: {
                answer: {
                    id: 1,
                    value: '1',
                },
                answers: [
                    {
                        id: 2,
                        value: '1',
                    },
                ]
            },
            expected: [
                {
                    id: 2,
                    value: '1',
                },
                {
                    id: 1,
                    value: '1',
                },
            ]
        },
        {
            data: {
                answer: {
                    id: 1,
                    value: '',
                },
                answers: [
                    {
                        id: 2,
                        value: '1',
                    },
                ]
            },
            expected: [
                {
                    id: 2,
                    value: '1',
                }
            ]
        }
    ]
}