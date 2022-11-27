<script setup lang="ts">
  import {onMounted, ref} from 'vue';
  import apiService from '../../shared/services/exercise-service';
  import Exercise from '../../components/exercise/exercise.vue';
  import AddExercise from '../../components/exercise/add-exercise.vue';

  let loading = ref<boolean>(false);
  let errorMessage = ref<string>('Loading data...');
  let exerciseList = ref<any[]>([]);

  onMounted(async () => {
    loading.value = true;
    try {
      exerciseList.value = await apiService.getExerciseList();
    } catch (e: any) {
      exerciseList.value = [];
      console.log(e);
      errorMessage.value = `${e?.code}: ${e?.message}`;
    }

    loading.value = false;
  });
</script>

<template>
  <AddExercise></AddExercise>
  <template v-if="!loading && exerciseList.length > 0">
    <Exercise v-for="exercise of exerciseList" :key="exercise.id" :exercise="exercise"></Exercise>
  </template>
  <template v-else>
    <p class="text-center text-sm text-neon-green-default">{{ errorMessage }}</p>
  </template>
</template>

<style scoped>

</style>