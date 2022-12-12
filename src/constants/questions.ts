import type { Question } from "@/types/questionnaire";

export const questions: Question[] = [
    {
        id: 1,
        question: 'What is your name?',
        short: 'name',
        type: 'text',
    },
    {
        id: 2,
        question: 'How ofter do you do sports ?',
        short: 'sports',
        type: 'radio',
        options: [
            { id: 1, label: 'Once a week', value: 'once a week' },
            { id: 2, label: 'Twice a week', value: 'twice a week' },
            { id: 3, label: 'Three times a week', value: 'three times a week' },
            { id: 4, label: 'Four times a week', value: 'four times a week' },
            { id: 5, label: 'Five times a week', value: 'five times a week' },
            { id: 6, label: 'Six times a week', value: 'six times a week' },
            { id: 7, label: 'Everyday', value: 'everyday' },
        ],
    },
    {
        id: 3,
        question: 'What is your favorite color?',
        short: 'color',
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