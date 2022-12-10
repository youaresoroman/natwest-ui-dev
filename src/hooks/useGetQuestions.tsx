import { useEffect, useState } from "react";
import type { IUseGetQuestions } from "@/types/useGetQuestions";
import { questions } from "@/constants/questions";

/**
 * @name useGetQuestions
 * @description This hook returns the questions from the questionnaire.
 * @returns {IUseGetQuestions}
 */

export const useGetQuestions: IUseGetQuestions = () => {
    const [data, setData] = useState<ReturnType<IUseGetQuestions>['data']>(null);

    useEffect(() => {
        setData(questions);
    }, []);

    return { data, isLoading: false };
}