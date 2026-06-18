import { grammarService } from "@/services";
import { useGrammarStore } from "@/store";

export const useGrammar = () => {
  const inputText = useGrammarStore(
    state => state.inputText,
  );

  const result = useGrammarStore(
    state => state.result,
  );

  const loading = useGrammarStore(
    state => state.loading,
  );

  const error = useGrammarStore(
    state => state.error,
  );

  const setInputText = useGrammarStore(
    state => state.setInputText,
  );

  const setResult = useGrammarStore(
    state => state.setResult,
  );

  const setLoading = useGrammarStore(
    state => state.setLoading,
  );

  const setError = useGrammarStore(
    state => state.setError,
  );

  const reset = useGrammarStore(
    state => state.reset,
  );

  const checkGrammar = async () => {
    try{

      setLoading(true);
      setError(null);

      await grammarService.checkGrammar();

    } catch(error) {
      setError('Failed to check grammar');

    } finally {
      setLoading(false);
    }
  };

  return {
    inputText,
    result,
    loading,
    error,

    setInputText,
    checkGrammar,
    reset
  }
}