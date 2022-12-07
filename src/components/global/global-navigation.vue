<script setup lang="ts">

</script>

<template>
  <nav class="bg-neon-green-default text-white p-6 tracking-widest text-ms md:text-lg flex flex-col md:flex-row justify-center md:items-center gap-3 md:gap-10 ">
    <RouterLink class="text-black hover:cursor-pointer hover:underline"
                :to="{ name: 'home' }" active-class="font-bold">Home</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer hover:underline"
                :to="{ name: 'dashboard' }" active-class="font-bold">Dashboard</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer hover:underline"
                :to="{ name: 'workout' }" active-class="font-bold">My Workout</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer hover:underline"
                :to="{ name: 'exerciseList' }" active-class="font-bold">Exercise-List</RouterLink>

    <RouterLink class="text-black hover:cursor-pointer hover:underline"
                :to="{ name: 'todo' }" active-class="font-bold">TO-DO</RouterLink>
  </nav>
</template>

<style scoped>

</style>