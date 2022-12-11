<script setup lang="ts">
  import {onMounted, ref} from 'vue';
  import apiService from '../../shared/services/exercise-service';
  import ExerciseItem from '../../components/exercise/exercise-item.vue';
  import AddExercise from '../../components/exercise/add-exercise.vue';
  import {Exercise} from '../../shared/models/Exercise';
  import GlobalAccordion from '../../components/global/global-accordion.vue';

  let loading = ref<boolean>(false);
  let errorMessage = ref<string>('Loading data...');
  let exerciseList = ref<Exercise[]>([]);

  onMounted(async () => {
    loading.value = true;
    try {
      exerciseList.value = await apiService.getExerciseList();
    } catch (e: any) {
      exerciseList.value = [];
      errorMessage.value = `${e?.code}: ${e?.message}`;
    }

    loading.value = false;
  });
</script>

<template>
  <GlobalAccordion title="Add new Exercise">
    <template v-slot:body>
      <AddExercise></AddExercise>
    </template>
  </GlobalAccordion>
  <template v-if="!loading && exerciseList.length > 0">
    <ExerciseItem v-for="exercise of exerciseList" :key="exercise.id" :exercise="exercise"></ExerciseItem>
  </template>
  <template v-else>
    <p class="text-center text-sm text-neon-green-default">{{ errorMessage }}</p>
  </template>
</template>

<style scoped>

</style>
