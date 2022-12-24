<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {Blacklist} from '../../shared/models/Blacklist';
import BlacklistService from '../../shared/services/blacklist-service';

  const blacklistedExercises = ref<Blacklist[]>([]);

  onMounted(async () => {
    try {
      blacklistedExercises.value = await BlacklistService.getBlacklist();
    } catch (e) {
      console.log(e);
    }
  })
</script>

<template>
  <h1 class="text-center">List of blacklisted Exercises</h1>
  <ul class="my-4 text-center">
    <li v-for="(be, index) of blacklistedExercises" :key="index" class="card mb-4 flex flex-col align-middle text-center">
      <span class="uppercase text-3xl">{{ be.exerciseName }}</span><span>{{ be.reason }}</span>
    </li>
  </ul>
</template>

<style scoped>

</style>