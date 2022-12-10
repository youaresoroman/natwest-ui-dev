export type EventFunction = (() => void);

export type SetStateDispatch<T> = Dispatch<SetStateAction<T>>;