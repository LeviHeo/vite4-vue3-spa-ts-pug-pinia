<template lang="pug">
Navigation
main(:class="'page page-'+currentPage")
  router-view
</template>
  <script lang="ts">
  import { defineComponent, watch, ref, computed, inject, reactive, provide, onMounted} from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useGlobalStore } from '@/stores';
  import { useI18n } from 'vue-i18n'
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

      console.log(store)

      const currentPage = ref(null);

      const fetchPageInfo =async (route:any, to:any) => {
        currentPage.value = to.name
      }

      router.beforeEach(async (to, from)=>{
        if(to.name != '404') {
          return await fetchPageInfo(route, to);
        }
      })

      const winH:any = ref(0);
      winH.value = window.innerHeight;
      provide('winH', winH);

      return {
        currentPage
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