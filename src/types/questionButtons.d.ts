import { ReactElement } from "react";
import { ScreenComponentProps } from "./screens";

export interface IQuestionButtons {
    (props: Omit<ScreenComponentProps, 'current'> & {
        hideNext?: boolean;
        hidePrev?: boolean;
    }): ReactElement;
}