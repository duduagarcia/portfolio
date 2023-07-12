import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      menu: false,
      lang: "en",
    };
  },
});
