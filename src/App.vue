<template lang="pug">
<router-link :to="{ name: 'home', params: { locale } }">
  | {{ t('navigations.home') }}
</router-link>
|
<router-link :to="{ name: 'about', params: { locale } }">
  | {{ t('navigations.about') }}
</router-link>

main(:class="'page page-'+currentPage")
  router-view
</template>
  <script lang="ts">
  import { defineComponent, watch, ref, computed, inject, reactive, provide, onMounted} from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useGlobalStore, useNavStore } from '@/stores';
  import { useI18n } from 'vue-i18n'
  import { SUPPORT_LOCALES } from '@/i18n'
  import axios from 'axios'


  import Navigation from "@/components/Navigation.vue"

  export default defineComponent({
    name: 'App',
    components: {
      Navigation,
    },
    setup() {
      const route  = useRoute();
      const router = useRouter();
      const store  = useGlobalStore();
      const menus = useNavStore();
      const { t, locale } = useI18n() 
      
      const currentLocale = ref(locale.value)
    

      const currentPage = ref(null);

      store.currentLang == ''? store.currentLang = store.defaultLang : '';
      console.log('current lang'+store.currentLang)

      const fetchPageInfo = async (route:any, to:any) => {
        currentPage.value = to.name;
      }

      router.beforeEach(async (to:any, from:any) =>{



        return await fetchPageInfo(route, to);
        if(to.name != '404') {
          return await fetchPageInfo(route, to);
        }
      })

      const scrollY:any = ref(0);
      window.addEventListener('scroll', function(){
        scrollY.value = window.pageYOffset;
      });

      const winH:any = ref(0);
      winH.value = window.innerHeight;

      provide('scrollY', scrollY);
      provide('winH', winH);

      const detectNavigator = () => {
        let browser;
        let agent:any = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (navigator.userAgent.match(/Edge/i) || navigator.userAgent.match(/Trident.*rv[ :]*11\./i)) {
            browser = "msie";
        }
        else {
            browser = agent[1].toLowerCase();
        }
        store.isBrowser = browser;
        return document.documentElement.className += ' '+browser;
      }

      const detectResponsive = () => {
        const winW  = window.innerWidth;
        const range = store.breakPoint;

        const updatePrefix = (idx:number) => {
          store.isPrefix = range[idx].prefix
          store.isScreen = range[idx].screen
        }

        winW > range[0].break ? updatePrefix(0) : winW > range[1].break ? updatePrefix(1) : winW > range[2].break ? updatePrefix(2) : updatePrefix(3);
      }

      const setPrefixClass = (to:any) => {
        const wrapper = document.documentElement.classList;
        const arr = store.breakPoint;
        if(!wrapper.contains(to)) {
          for (let idx = 0; idx < arr.length; idx++) {
            const el = arr[idx];
            wrapper.contains(el.screen) ? wrapper.remove(el.screen):'';
          }
          return document.documentElement.className += ' '+to;
        }
      }

      const resizeHandler = () => {
        detectResponsive();
        winH.value = window.innerHeight;
      }

      watch(() => store.isScreen, async (to: any, from: any) => {
        setPrefixClass(to);
      })

      onMounted(() =>{
        detectNavigator();
        detectResponsive();
        window.addEventListener('resize', resizeHandler);
      })

      watch(router.currentRoute, route => {
      currentLocale.value = route.params.locale as string
    })

    watch(currentLocale, val => {
      router.push({
        name: router.currentRoute.value.name!,
        params: { locale: val }
      })
    })
    

      return {
        currentPage,
        t, locale, currentLocale, supportLocales: SUPPORT_LOCALES 

      }
    },
  })
  </script>

  <style lang="scss">
  @import "@/styles/common.scss";
  h1 {
    font-family: 'Roboto Regular';
  }
  </style>