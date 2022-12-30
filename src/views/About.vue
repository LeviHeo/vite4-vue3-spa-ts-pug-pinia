<template lang="pug">
main
    h1 About
    | {{ $t('pages.about') }}
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'About',
    components: {
    },
    setup() {
        return {
        }
    },
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";
@import "@/styles/mixins";
</style>