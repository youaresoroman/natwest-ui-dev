import { ReactElement, ReactNode } from "react";
import type { EventFunction } from "./utility";
import type { ScreenButtonEvent } from "./screens";

export interface IQuestionButton {
    (props: {
        onClick: ScreenButtonEvent,
        children: ReactNode
    }): ReactElement;
}