<template lang="pug">
.select-control
    a.selection(@click="isShowingMenu = !isShowingMenu")
        span.text(v-html="selectionText")
        span.ti.ti-chevron-down.m-l-sm
    .options(v-show="isShowingMenu")
        .options-wrapper
            a.option.text-caption(v-for="option in content" 
                v-text="option.text"
                :class="{'active': selectedValue == option.code}"
                @click="selectValue(option.code, true)")
</template>

<script lang="ts" scoped>
import { computed, defineComponent,onMounted, ref } from 'vue'
import { useGlobalStore } from '@/stores';
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "Select",
    props: {
        content: Object,
    },
    setup(props:any){
        const store = useGlobalStore();
        const i18n = useI18n();
        const isShowingMenu = ref(false);
        const selectedValue = ref();
        const selectionText = computed(()=>{
            selectedValue.value == undefined ? selectedValue.value = store.defaultLang : '';
            const obj = props.content.filter((item:any) => item.code == selectedValue.value)[0];
            console.log('Selected lang: '+JSON.stringify(props.content.filter((item:any) => item.code == selectedValue.value)[0]))
            i18n.locale.value = obj.code;
            if(!obj) return '';
            return obj.text;
        })

        const selectValue = (val:any, silent:boolean) =>{
            selectedValue.value = val;
            isShowingMenu.value = false;
            if(!silent) props.onChange(val);
        }

        const clickedOutside = () => {
            isShowingMenu.value = false;
        }

        onMounted(()=>{
            selectedValue.value == store.defaultLang
            selectValue(props.content[0].code, true);
        })

        return{
            clickedOutside,
            isShowingMenu,
            selectValue,
            selectedValue,
            selectionText
        }
    }
})
</script>

<style scoped lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";
.select-control{
    position: relative;
    width: 100%;
    z-index: 200;
    .selection{
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        // padding: $space-xs 0;
        font-size: 1em;
    }
    .options{
        position: absolute;
        top: 100%;
        right: 0;
        width: 100%;
        min-width: 160px;
        height: auto;
        .options-wrapper{
            background: white;
            box-shadow: 0 2px 6px rgba(black, 0.1);
        }
        .option{
            display: block;
        }
    }
}
</style>


// {{ $pinia.state.value['global'].defaultLang }}