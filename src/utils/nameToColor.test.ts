// write unittest for nameToColors function

import { nameToColor } from './nameToColor';

describe('nameToColors', () => {
    it('should return the correct colors', () => {
        const colors = nameToColor('John Doe');
        expect(colors).toEqual('#000000');
    });
    it('should return the correct colors', () => {
        const colors = nameToColor('red');
        expect(colors).toEqual('#f44336');
    });
});