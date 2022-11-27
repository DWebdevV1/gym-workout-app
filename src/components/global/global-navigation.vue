<script setup lang="ts">

</script>

<template>
  <nav class="p-6 bg-gray-700 text-white flex justify-center items-center gap-10 text-lg tracking-widest">
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