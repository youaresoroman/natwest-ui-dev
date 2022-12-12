import React from "react";
import type { Input, InputWithOptions } from "@/types/input";
import styles from "./SelectInput.module.scss";
import { useInput } from "@/hooks";

export const SelectInput: Input<string, InputWithOptions> = ({ name, defaultValue, options, onChange }) => {
    const { value, updateValue } = useInput({ name, defaultValue, onChange });

    const onUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { target: { value } } = e;
        updateValue(value)
    }

    return (
        <div className={styles.SelectInput}>
            <label>
                <select onChange={onUpdate} value={value}>
                    {options.map(({ id, value, label }) => (
                        <option key={id} value={value}>{label}</option>
                    ))}
                </select>
            </label>
        </div>
    )
}