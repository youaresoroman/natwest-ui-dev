import { ReactElement } from "react";

export interface Input<V, T extends {}> {
    (props: {
        name: string;
        label?: string;
        placeholder?: string;
        defaultValue?: V;
        disabled?: boolean;
        onChange: (props: { name: string, value: V }) => void;
    } & T): ReactElement
}

export interface InputWithOptions {
    options: InputOption[];
}

export type InputOption = {
    id: number;
    label: string;
    value: string;
};