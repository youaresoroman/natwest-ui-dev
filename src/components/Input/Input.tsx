import React, { ReactElement } from "react";
import type { Question } from "@/types/questionnaire";
import { RadioInput, SelectInput, TextInput } from "@/components";

export interface IInput {
    (props: {
        type: Question['type'];
        options?: Question['options'];
        defaultValue: string;
        onChange: (value: string) => void;
    }): ReactElement;
}

export const Input: IInput = ({ type, defaultValue, options, onChange }) => {
    return (
        <>
            {type === 'text' && (
                <TextInput onChange={({ value }) => onChange(value)} defaultValue={defaultValue} name='text-input' label='Label' />
            )}
            {type === 'option' && (
                <SelectInput onChange={({ value }) => onChange(value)} defaultValue={defaultValue} name='select-input' label='Label' options={options || []} />
            )}
            {type === 'radio' && (
                <RadioInput onChange={({ value }) => onChange(value)} defaultValue={defaultValue} name='select-input' label='Label' options={options || []} />
            )}
        </>
    )
}