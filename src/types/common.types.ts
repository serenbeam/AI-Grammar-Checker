export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export interface BaseResponse {
    success: boolean;
    message?: string;
}
