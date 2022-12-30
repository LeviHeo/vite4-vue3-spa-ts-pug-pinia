<template lang="pug">
main
    h1 Home
    h3 SPA / Vite 4 / Vue 3 / Pug / TS / SASS / Router / Pinia / Gsap / i18n
    h4 ver 2022.12
    img(src="@/assets/images/vite.svg" style="width:60px")

    section
    section
    section
    section
</template>

<script lang="ts">
    import { defineComponent, onMounted, onUnmounted, ref} from 'vue'

    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    gsap.registerPlugin(ScrollTrigger);

    import { useI18n } from 'vue-i18n'
    

    export default defineComponent({
        name: 'Home',
        components: {
        },
        setup() {
            const text = useI18n();
            const triggers = ScrollTrigger.getAll();
            const gsapSet = () => {
                gsap.utils.toArray<HTMLElement>("section").forEach(function(section, index){
                    ScrollTrigger.create({
                        trigger: section,
                        id: index.toString(),
                        start: 'top 70%',
                        end:'bottom top',
                        toggleActions: 'play reverse none reverse',
                        toggleClass: {targets: section, className: "hello"},
                        onEnter:function(){
                        },
                        onLeaveBack:function(){
                        },
                    });
                });
            }
            onMounted(() => {
                ScrollTrigger.refresh();
                gsapSet();
            });
            onUnmounted(() => {
                triggers.forEach((trigger) => {
                    trigger.kill();
                });
                ScrollTrigger.clearMatchMedia();
            });
            return {
                text
            }
        },
    });
</script>

<style scoped lang="scss">
section {
    border:2px solid red;
    min-height:100vh;

    &.hello {
        border:2px solid green;
    }
}
</style>