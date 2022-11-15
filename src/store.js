import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "./api/axios";

let userStore = (set) => ({
  user: null,
  fetch: async (url) => {
    try {
      const response = await axios.get(url);

      set({ user: await response.data });
    } catch (error) {
      console.log(error);
    }
  },
});

export const useUserStore = create(devtools(userStore));
