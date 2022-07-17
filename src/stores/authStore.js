import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLogged: false,
  }),
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        this.isLogged = true;
        resolve(true);
      });
    }
  }
})
