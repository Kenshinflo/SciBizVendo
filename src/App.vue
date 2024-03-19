<script setup>
  // import HomeView from './views/HomeView.vue';
  // import NavView from './views/NavView.vue';
  import {RouterView} from 'vue-router'

</script>

<template>
  <main class="bg-teal-300 m-0 p-0">
    <RouterView />
  </main>
</template>

<style >
  html{
    max-height: 1280px;
    max-width: 800px;
    /* overflow: hidden; */
  }
</style>
