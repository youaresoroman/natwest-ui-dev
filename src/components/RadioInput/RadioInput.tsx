import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/types/input";

export const RadioInput: Input<string, {}> = ({ name, defaultValue, onChange }) => {
    const lastValue = useRef(defaultValue || 0);
    const [value, setValue] = useState<number>(0);

    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = e;
        setValue(value)
    }

    const setDefaultValue = () => {
        setValue(defaultValue || 0);
        lastValue.current = defaultValue || 0;
    }

    useEffect(() => {
        if (value !== lastValue.current) {
            onChange(name, value);
            lastValue.current = value;
        }
    }, [value]);

    useEffect(() => {
        if (defaultValue && defaultValue !== lastValue.current) {
            setDefaultValue()
        }
    }, [defaultValue]);

    useEffect(() => {
        setDefaultValue()
    }, [name]);

    return (
        <div>
            <input
                type="text"
                name={name}
                value={value}
                onChange={updateValue}
            />
        </div>
    )
}