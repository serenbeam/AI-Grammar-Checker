import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryItem } from '@/types';
import { create } from 'zustand';
import {
  persist,
  createJSONStorage,
} from 'zustand/middleware';

interface HistoryState {
  histories: HistoryItem[];

  addHistory: (item: HistoryItem) => void;
  removeHistory: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      histories: [],

      addHistory(item) {
        set((state) => ({
          histories: [item, ...state.histories],
        }));
      },

      removeHistory(id) {
        set((state) => ({
          histories: state.histories.filter(
            (item) => item.id !== id,
          ),
        }));
      },

      clearHistory() {
        set({
          histories: [],
        });
      },
    }),
    {
      name: 'history-storage',

      storage: createJSONStorage(
        () => AsyncStorage,
      ),
    },
  ),
);