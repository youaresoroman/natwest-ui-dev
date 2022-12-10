import React, { useMemo, useState, FC } from 'react';
import type { ScreensProps } from '@/types/screens';

/**
 * @name Screens
 * @description This is a component that renders the screens
 * @param {FC<ScreensProps>} Screen - This is the screen component
 * @param {FC<ScreensProps>} FinalScreen - This is the final screen component
 * @param {number} quantity - This is the quantity of screens
 * @returns {JSX.Element} - This is the component
 * @example
 * <Screens Screen={Question} FinalScreen={FinalScreen} quantity={questions.length} />
 */

export const Screens: FC<ScreensProps> = ({
    Screen,
    FinalScreen,
    quantity
}) => {
    const [current, setCurrent] = useState(0);

    const { isLastScreen, isFirstScreen } = useMemo(() => ({
        isLastScreen: current === quantity,
        isFirstScreen: current === 0
    }), [current, quantity])

    const goNext = () => setCurrent((prev) => prev + 1)
    const goPrev = () => setCurrent((prev) => prev - 1)

    return isLastScreen ? <FinalScreen goPrev={goPrev} /> : <Screen current={current} goNext={!isLastScreen ? goNext : null} goPrev={!isFirstScreen ? goPrev : null} />
}