import create, { SetState } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  dopen: boolean;
  updateOpen: (dopen: boolean) => void;
}

// Define the StateCreator type explicitly
type StateCreator<T extends object> = (
  set: SetState<T>,
  get: () => T
) => T;

// Define your appStore with the correct type
const appStore: StateCreator<AppState> = (set) => ({
  dopen: true,
  updateOpen: (dopen) => set((state) => ({ ...state, dopen })),
});

// Use the persist middleware correctly by providing the StateCreator type
const persistedAppStore = persist<AppState, any>(appStore, {
  name: "my_app_store",
});

// Create the store using the persistedAppStore
export const useAppStore = create(persistedAppStore);
