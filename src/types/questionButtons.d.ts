import { ReactElement } from "react";
import { ScreenComponentProps } from "./screens";

export interface IQuestionButtons {
    (props: Omit<ScreenComponentProps, 'current', 'isLast'> & Partial<Pick<ScreenComponentProps, 'isLast' , 'isFinalScreen'>> & {
        hideNext?: boolean;
        hidePrev?: boolean;
    }): ReactElement;
}