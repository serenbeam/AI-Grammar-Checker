export interface HistoryItem {
  id: string;
  originalText: string;
  correctedText: string;
  createdAt: string;
}

export interface HistoryState {
  histories: HistoryItem[];
}