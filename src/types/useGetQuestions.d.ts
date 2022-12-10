export interface IUseGetQuestions {
    (): { data: Question[] | null, isLoading: boolean }
}