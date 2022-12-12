<script setup lang="ts">
import {ref} from 'vue';

const fullNav = ref(false);
const toggleNav = () => fullNav.value = !fullNav.value;
</script>

<template>
  <h4 class="text-black bg-neon-green-default p-5 select-none text-center font-bold hover:cursor-pointer"
      @click="toggleNav">GYM Workout App</h4>

  <nav v-show="fullNav" class="bg-neon-green-default text-white p-5 tracking-widest text-ms border border-black
  md:text-lg flex flex-col md:flex-row justify-center md:items-center gap-3 md:gap-10">

    <RouterLink class="text-black hover:cursor-pointer select-none hover:underline"
                :to="{ name: 'home' }" active-class="font-bold">Home</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer select-none hover:underline"
                :to="{ name: 'dashboard' }" active-class="font-bold">Dashboard</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer select-none hover:underline"
                :to="{ name: 'workout' }" active-class="font-bold">My Workout</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer select-none hover:underline"
                :to="{ name: 'exerciseList' }" active-class="font-bold">Exercise-List</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer select-none hover:underline"
                :to="{ name: 'todo' }" active-class="font-bold">TO-DO</RouterLink>
  </nav>
</template>

<style scoped>

</style>
