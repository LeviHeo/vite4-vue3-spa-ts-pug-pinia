<template lang="pug">
nav
    div(v-for="item in menu.header.nav")
        <router-link :to="'/'+$pinia.state.value['global'].currentLang+item.link" v-html="item.text"></router-link>

div
    Select(:content="menu.langs" ref="selectRef")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useNavStore } from '@/stores';

import Select from '@/components/Select.vue';

export default defineComponent({
    name:'Navigation',
    components:{
        Select
    },
    props:{
        message: String
    },
    setup(props){
        const menu = useNavStore();

        return {
            menu,
        }
    }
})
</script>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
</style>