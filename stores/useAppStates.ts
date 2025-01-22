import { OccurredStates } from "@/types/interfaces";
import { create } from "zustand";

interface OccurredStatesStore {
  statusInfo: OccurredStates;
  setStatus: (status: OccurredStates) => void;
  setDefaultStatus: () => void;
}

const defaultStatus: OccurredStates = {
  type: null,
  code: 0,
  title: "",
  message: "",
};

export const useAppStates = create<OccurredStatesStore>((set) => ({
  statusInfo: defaultStatus,
  setStatus: (status) => {
    set({ statusInfo: status });
  },
  setDefaultStatus: () => {
    set({ statusInfo: { ...defaultStatus } });
  },
}));
