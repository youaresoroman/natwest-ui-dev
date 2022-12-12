import { ReactElement } from "react";
import type { EventFunction } from "./utility";

export type ScreenButtonEvent = EventFunction | null;

export interface ScreenComponentProps {
    current: number;
    isLast: boolean;
    isFinalScreen: boolean;
    goNext: ScreenButtonEvent;
    goPrev: ScreenButtonEvent;
    goFirst: EventFunction;
    goLast: EventFunction;
}

export interface ScreensProps {
    quantity: number;
    Screen: FC<ScreenComponentProps>;
    FinalScreen: FC<Pick<ScreenComponentProps, 'goPrev'>>;
}

export interface IScreen {
    (props: ScreenComponentProps): ReactElement;
}