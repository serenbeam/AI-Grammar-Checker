import { create } from 'zustand';
export interface GrammarState {
  inputText: string;
  result: string;
  loading: boolean;
  error: string | null;

  setInputText: (text: string) => void;
  setResult: (text: string) => void;
  setLoading: (text: boolean) => void;
  setError: (text: string | null) => void;
  reset: () => void;
}

export const useGrammarStore = create<GrammarState>((set) => ({
  inputText: '',
  result: '',
  loading: false,
  error: null,

  setInputText(text) {
    set({
      inputText: text,
    })
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
      result: '',
      loading: false,
      error: null
    })
  },
}))