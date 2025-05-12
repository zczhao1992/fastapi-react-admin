import { create } from "zustand";

interface BasicTableStoreType {
  count: number;
  increment: () => void;
}

const useBasicTableStore = create<BasicTableStoreType>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useBasicTableStore;
