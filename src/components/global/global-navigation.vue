<script setup lang="ts">

</script>

<template>
  <nav class="bg-gray-700 text-white p-6 tracking-widest text-ms md:text-lg flex flex-col md:flex-row justify-center md:items-center gap-3 md:gap-10 ">
    <RouterLink class="hover:cursor-pointer hover:underline"
                :to="{ name: 'home' }" active-class="text-neon-green-default font-bold">Home</RouterLink>

    <RouterLink class="hover:cursor-pointer hover:underline"
                :to="{ name: 'dashboard' }" active-class="text-neon-green-default font-bold">Dashboard</RouterLink>

    <RouterLink class="hover:cursor-pointer hover:underline"
                :to="{ name: 'workout' }" active-class="text-neon-green-default font-bold">My Workout</RouterLink>

    <RouterLink class="hover:cursor-pointer hover:underline"
                :to="{ name: 'exerciseList' }" active-class="text-neon-green-default font-bold">Exercise-List</RouterLink>

    <RouterLink class="hover:cursor-pointer hover:underline"
                :to="{ name: 'todo' }" active-class="text-neon-green-default font-bold">TO-DO</RouterLink>
  </nav>
</template>

<style scoped>

</style>