import { grammarService } from "@/services";
import { useGrammarStore } from "@/store";
import { useHistory } from "./useHistory";

export const useGrammar = () => {
  const inputText = useGrammarStore(
    state => state.inputText,
  );

  const  tone = useGrammarStore(
    state => state.tone,
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

  const setTone = useGrammarStore(
    state => state.setTone,
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

  const {addHistory} = useHistory();

  const checkGrammar = async () => {
    try{

      if(!inputText.trim()) {
        setError('Please enter some text');
        return;
      }

      setLoading(true);
      setError(null);

      const response =
      await grammarService.checkGrammar({
        text: inputText,
        tone
      });

      setResult(response);

      await addHistory({
        id: Date.now().toString(),
        originalText: response.originalText,
        correctedText: response.correctedText,
        createdAt: new Date().toISOString(),
      });

    } catch(error: any) {
      if(error?.name === 'CanceledError') {
        return; 
      }
      
      setError(
        error?.response?.data?.message ??
        'Failed to check grammar'
      );

    } finally {
      setLoading(false);
    }
  };

  return {
    inputText,
    tone,
    result,
    loading,
    error,

    setInputText,
    setTone, 
    setResult,
    checkGrammar,
    reset
  }
}