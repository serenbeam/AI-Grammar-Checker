import { GrammarCheckReslut, GrammarTone } from '@/types';
import { create } from 'zustand';
export interface GrammarState {
  inputText: string;
  tone: GrammarTone;
  result: GrammarCheckReslut | null;
  loading: boolean;
  error: string | null;

  setInputText: (text: string) => void;
  setTone: (tone: GrammarTone) => void;
  setResult: (result: GrammarCheckReslut | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useGrammarStore = create<GrammarState>((set) => ({
  inputText: '',
  tone: 'formal',
  result: null,
  loading: false,
  error: null,

  setInputText(text) {
    set({
      inputText: text,
    })
  },

  setTone(tone) {
    set({
      tone,
    });
  },

  setResult(result) {
    set({
      result,
    })
  },

  setLoading(loading) {
    set({
      loading,
    })
  },

  setError(error) {
    set({
      error,
    })
  },

  reset() {
    set({
      inputText: '',
      tone: 'formal',
      result: null,
      loading: false,
      error: null
    })
  },
}))