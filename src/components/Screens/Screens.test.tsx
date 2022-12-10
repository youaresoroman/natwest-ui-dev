import React, { FC } from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import type { ScreenComponentProps } from '@/types/screens';
import { Screens } from './Screens';

const Screen: FC<ScreenComponentProps> = ({ current, goNext, goPrev }) => (
    <div>
        <div>{current}</div>
        {goNext && <button onClick={goNext}>Next</button>}
        {goPrev && <button onClick={goPrev}>Prev</button>}
    </div>
);

const FinalScreen: FC<ScreenComponentProps> = () => <div>FinalScreen</div>;

const props = {
    Screen,
    FinalScreen,
    quantity: 2
}

describe('Screens', () => {
    it('should render successfully', () => {
        render(<Screens {...props} />);
        screen.getByText('0');
    });
    it('should render successfully', async () => {
        render(<Screens {...props} />);
        const button = screen.getByText('Next');
        await act(async () => {
            fireEvent.click(button);
        });
        screen.getByText('1');
        await act(async () => {
            fireEvent.click(button);
        });
        screen.getByText('FinalScreen');
    });
});