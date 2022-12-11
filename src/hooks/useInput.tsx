import { useEffect, useRef, useState } from "react";

export interface UseInput {
    (props: { name: string, defaultValue?: string, onChange: (props: { name: string, value: string }) => void }): {
        updateValue: (value: string) => void;
        value: string;
    }
}

export const useInput: UseInput = ({ name, defaultValue, onChange }) => {
    const lastValue = useRef<string>(defaultValue || "");
    const [value, setValue] = useState<string>("");

    const updateValue = (value: string) => setValue(value)

    const setDefaultValue = (defaultValue?: string) => {
        setValue(defaultValue || "");
        lastValue.current = defaultValue || "";
    }

    useEffect(() => {
        if (value !== lastValue.current) {
            onChange({ name, value });
            lastValue.current = value;
        }
    }, [value]);

    useEffect(() => {
        setDefaultValue(defaultValue)
    }, [defaultValue, name]);

    return {
        updateValue, value
    }
}