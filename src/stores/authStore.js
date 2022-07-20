import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        let isLogged = !!localStorage.getItem('auth')
        return {
            isLogged
        }
    },
    actions: {
        login(username, password, inLocalStorage) {
            if (inLocalStorage)
                localStorage.setItem('auth', { username, password })

            return new Promise((resolve, reject) => {
                this.isLogged = true;
                resolve(true);
            });
        },
        isSavedInLocalStorage() {

        },
    }
})