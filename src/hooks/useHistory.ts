import { historyService } from "@/services";
import { useHistoryStore } from "@/store"
import { HistoryItem } from "@/types";

export const useHistory = () => {
  const histories = useHistoryStore(
    state => state.histories,
  );

  const addHistoryStore = useHistoryStore(
    state => state.addHistory,
  );

  const removeHistoryStore = useHistoryStore(
    state => state.removeHistory,
  );

  const clearHistoryStore = useHistoryStore(
    state => state.clearHistory,
  );

  const addHistory = async (
    item: HistoryItem,
  ) => {
    try {
      await historyService.saveHistory();

      addHistoryStore(item);

    } catch(error) {
      console.error(error);
    }
  };

  const removeHistory = async (
    id: string,
  ) => {
    try {
      await historyService.deleteHistory();

      removeHistoryStore(id);

    } catch(error) {
      console.error(error);
    }
  };

  const clearHistory = async () => {
    try {
      await historyService.clearHistory();

      clearHistoryStore();

    } catch(error) {
      console.error(error);
    }
  };

  return {
    histories,
    addHistory,
    removeHistory,
    clearHistory
  };
}