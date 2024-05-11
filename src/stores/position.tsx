import { create } from "zustand";

interface User {
  latitude: number;
  setLatitude: (latitude: number) => void;
  longitude: number;
  setLongitude: (longitude: number) => void;
  address: string;
  setAddress: (address: string) => void;
}

const usePositionStore = create<User>((set) => ({
  latitude: 0,
  setLatitude: (lat: number) => set({ latitude: lat }),
  longitude: 0,
  setLongitude: (lng: number) => set({ longitude: lng }),
  address: "",
  setAddress: (addr: string) => set({ address: addr })
}));

export default usePositionStore;
