<script setup lang="ts">
import {Exercise} from '../../shared/models/Exercise';
import {computed} from 'vue';

const props = defineProps<{
  exercise: Exercise
}>();

const descTextShorted = computed<string>(() => props.exercise.description?.length > 250 ?
        `${props.exercise.description?.substring(0, 250)}...` : props.exercise?.description);
</script>

<template>
  <div class="area flex flex-col lg:flex-row my-5 hover:cursor-pointer hover:bg-gray-500 border-t-4 border-l-4 border-neon-green-default drop-shadow-sm">
    <div>
      <img :src="props.exercise.banner" :alt="props.exercise.title" class="h-full w-full object-cover rounded-lg" />
    </div>
    <div class="p-5">
      <div>
        <h1 class="text-2xl mb-5 text-neon-green-default">{{ props.exercise.title }}</h1>
        <p>{{ descTextShorted }}</p>
      </div>
      <div class="mt-5 flex flex-wrap gap-3">
        <div v-for="img of props.exercise?.images" class="opacity-60 hover:opacity-100 hover:ring-2 hover:ring-neon-green-default rounded-lg">
          <div class="w-32">
            <img :src="img.src" :alt="img.alt" class="rounded-lg">
          </div>
        </div>
        <div v-for="vid of props.exercise?.videos" class="opacity-60 hover:opacity-100 hover:ring-2 hover:ring-neon-green-default rounded-lg">
          <div class="w-32">
            <img :src="vid.url" :alt="vid.title" class="rounded-lg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
