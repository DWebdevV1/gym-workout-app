<script setup>

import Navigation from '@/components/global/global-navigation.vue';
</script>

<template>
  <Navigation></Navigation>
  <div class="bg-gray-900 p-5 md:p-10 text-white">
    <div class="max-w-full bg-gray-700 h-full min-h-screen mx-auto px-5 py-10 rounded-lg">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>
