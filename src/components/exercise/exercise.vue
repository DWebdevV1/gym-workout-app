<script setup lang="ts">
import {Exercise} from '../../shared/models/Exercise';

const props = defineProps<{
  exercise: Exercise
}>();
</script>

<template>
  <div class="area flex my-5 hover:cursor-pointer hover:bg-gray-500">
    <img :src="exercise.banner" :alt="exercise.title" />
    <div class="p-5">
      <h1 class="text-2xl mb-5">{{ exercise.title }}</h1>
      <p>{{ exercise.description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>