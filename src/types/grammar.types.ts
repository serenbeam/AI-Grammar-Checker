export type GrammarTone =
| 'formal'
| 'casual'
| 'professional'
| 'friendly'

export interface GrammarCheckParams {
    text: string;
    tone?: GrammarTone;
}

export interface GrammarCheckReslut {
    originalText: string;
    correctedText: string;
    explanation?: string;
}

export interface GrammarState {
    inputText: string;
    result: GrammarCheckReslut | null;
    isLoading: boolean;
    error: string | null;
}