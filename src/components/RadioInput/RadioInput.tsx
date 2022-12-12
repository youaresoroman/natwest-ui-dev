import React, { ChangeEvent } from "react";
import { Input, InputWithOptions } from "@/types/input";
import { useInput } from "@/hooks";
import styles from './RadioInput.module.scss';

export const RadioInput: Input<string, InputWithOptions> = ({ name, defaultValue, options, onChange }) => {
    const { value, updateValue } = useInput({ name, defaultValue, onChange });

    const onUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        updateValue(value)
    }

    return (
        <div className={styles.RadioInput}>
            {options.map(({ value: optionValue, label }, index) => (
                <label key={`${label}-${index}`}>
                    <input type="radio" value={optionValue} name={label.toLowerCase()} checked={value === optionValue} onChange={onUpdate} />
                    <span>{label}</span>
                </label>
            ))}
        </div>
    )
}