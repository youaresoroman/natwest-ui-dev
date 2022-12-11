import { Answer } from '@/types/questionnaire';
import { checkIsAnswered, setAnswerValue } from './questionnarie';
import { data } from './__fixtures__/questionnaire';

const { checkIsAnsweredFixtures, setAnswerValueFixtures } = data;

describe('Questionnarie', () => {
    describe("impored beforehand", () => {
        it.each(checkIsAnsweredFixtures)(
            "should increase the value of %s with 1",
            ({ data: { questionId, answers }, expected }) => (expect(checkIsAnswered(questionId, answers)).toEqual(expected))
        );
    });
    describe("impored beforehand", () => {
        it.each(setAnswerValueFixtures)(
            "should increase the value of %s with 1",
            ({ data: { answer, answers }, expected }) => (expect(setAnswerValue(answer, answers)).toEqual(expected))
        );
    });
});

// describe('Questionnarie', () => {
//     describe('getQuestionnarie', () => {
//         it('should return the questionnarie', () => {
//             const questionnarie = getQuestionnarie();
//             expect(questionnarie).toEqual({
//                 id: 1,
//                 name: 'Questionnarie',
//                 questions: [
//                     {
//                         id: 1,
//                         text: 'How are you?',
//                         options: [
//                             { id: 1, text: 'Good' },
//                             { id: 2, text: 'Bad' },
//                             { id: 3, text: 'So So' },
//                         ],
//                     },
//                     {
//                         id: 2,
//                         text: 'How old are you?',
//                         options: [
//                             { id: 1, text: '18-25' },
//                             { id: 2, text: '26-35' },
//                             { id: 3, text: '36-45' },
//                             { id: 4, text: '46-55' },
//                             { id: 5, text: '56-65' },
//                             { id: 6, text: '66+' },
//                         ],
//                     },
//                 ],
//             });
//         });
//     });

//     describe('getQuestionnarieById', () => {
//         it('should return the questionnarie by id', () => {
//             const questionnarie = getQuestionnarieById(1);
//             expect(questionnarie).toEqual({
//                 id: 1,
//                 name: 'Questionnarie',
//                 questions: [
//                     {
//                         id: 1,
//                         text: 'How are you?',
//                         options: [
//                             { id: 1, text: 'Good' },
//                             { id: 2, text: 'Bad' },
//                             { id: 3, text: 'So So' },
//                         ],
//                     },
//                     {
//                         id: 2,
//                         text: 'How old are you?',
//                         options: [
//                             { id: 1, text: '18-25' },
//                             { id: 2, text: '26-35' },
//                             { id: 3, text: '36-45' },
//                             { id: 4, text: '46-55' },
//                             { id: 5, text: '56-65' },
//                             { id: 6, text: '66+' },
//                         ],
//                     },
//                 ],
//             });
//         });
//     });
// });

// describe('checkIsAnswered', () => {
//     it('should return true if the question is answered', () => {
//         const questionId = 1;
//         const answers: Answer[] = [
//             {
//                 id: 1,
//                 value: '1',
//             },
//         ];
//         const isAnswered = checkIsAnswered(questionId, answers);
//         expect(isAnswered).toBe(true);
//     });

//     it('should return false if the question is not answered yet', () => {
//         const questionId = 1;
//         const answers: Answer[] = [
//             {
//                 id: 2,
//                 value: '1',
//             },
//         ];
//         const isAnswered = checkIsAnswered(questionId, answers);
//         expect(isAnswered).toBe(false);
//     });
// });

// describe('setAnswerValue', () => {
//     it('should return the new answers array', () => {
//         const answer: Answer = {
//             id: 1,
//             value: '1',
//         };
//         const answers: Answer[] = [
//             {
//                 id: 2,
//                 value: '1',
//             },
//         ];
//         const newAnswers = setAnswerValue(answer, answers);
//         expect(newAnswers).toEqual([
//             {
//                 id: 2,
//                 value: '1',
//             },
//             {
//                 id: 1,
//                 value: '1',
//             },
//         ]);
//     });
// });