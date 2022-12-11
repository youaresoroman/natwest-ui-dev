import React, { ChangeEvent } from "react";
import { Input } from "@/types/input";
import styles from "./TextInput.module.scss";
import { useInput } from "@/hooks";

export const TextInput: Input<string, { label: string; }> = ({ name, defaultValue, label, onChange }) => {
    const { value, updateValue } = useInput({ name, defaultValue, onChange });

    const onUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        updateValue(value)
    }

    return (
        <div className={styles.TextInput}>
            <input
                type="input"
                className={styles.input}
                placeholder={label}
                value={value}
                name={name}
                id={name}
                onChange={onUpdate}
                required
            />
            <label htmlFor={name} className={styles.label}>{label}</label>
        </div>
    )
}