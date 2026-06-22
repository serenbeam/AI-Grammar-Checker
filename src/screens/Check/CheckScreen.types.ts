import { GrammarCheckReslut, GrammarTone } from "@/types";

export interface InputSectionProps {
  value: string;
  onChangeText: (text: string) => void;
}

export interface ToneSelectorProps {
  selectedTone: GrammarTone;
  onSelectedTone: (tone: GrammarTone) => void;
}

export interface ActionButtonsProps {
  loading: boolean;
  onCheck: () => void;
  onClear: () => void;
}

export interface ResultSectionProps {
  loading: boolean;
  result: GrammarCheckReslut | null;
}