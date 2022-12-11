import type { Question } from "@/types/questionnaire";

export const questions: Question[] = [
    {
        id: 1,
        question: 'What is your name?',
        type: 'text',
    },
    {
        id: 2,
        question: 'What is your age?',
        type: 'text',
    },
    {
        id: 3,
        question: 'What is your favorite color?',
        type: 'option',
        options: [
            { id: 1, label: 'Red', value: 'red' },
            { id: 2, label: 'Green', value: 'green' },
            { id: 3, label: 'Blue', value: 'blue' },
            { id: 4, label: 'Yellow', value: 'yellow' },
            { id: 5, label: 'Black', value: 'black' },
            { id: 6, label: 'White', value: 'white' },
            { id: 7, label: 'Orange', value: 'orange' },
            { id: 8, label: 'Purple', value: 'purple' },
            { id: 9, label: 'Pink', value: 'pink' },
        ],
    }
]