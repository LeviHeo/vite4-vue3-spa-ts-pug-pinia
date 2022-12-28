<template lang="pug">
nav
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Navigation',
    props:{
        message: String
    },
    setup(props){
        return {
        }
    }
})
</script>