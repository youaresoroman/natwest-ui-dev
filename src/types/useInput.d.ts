export interface UseInput {
    (props: { name: string, defaultValue?: string, onChange: (props: { name: string, value: string }) => void }): {
        updateValue: (value: string) => void;
        value: string;
    }
}