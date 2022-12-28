import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
    id: 'global',
    state: () => ({
        defaultLang: 'en',
        currentLang: '',
        isLoaded:'',
        isPrefix:'',
        isScreen:'',
        isBrowser:'',
        breakPoint:[
            {
              break:1280,
              prefix:'xl',
              screen:'desktop'
            },
            {
              break:1023,
              prefix:'lg',
              screen:'desktop'
            },{
              break:767,
              prefix:'md',
              screen:'tablet'
            },{
              break:0,
              prefix:'sm',
              screen:'mobile'
            },
        ]
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
