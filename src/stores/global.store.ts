import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
    id: 'global',
    state: () => ({
        defaultLanguage: 'en',
        currentLanguage: '',
    }),
    actions: {
        success() {
            //this.alert = { message, type: 'alert-success' };
        },
        error() {
            //this.alert = { message, type: 'alert-danger' };
        },
        clear() {
            //this.alert = null;
        }
    }
});
