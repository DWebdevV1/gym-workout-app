<script setup lang="ts">
import GlobalAccordion from '../../components/global/global-accordion.vue';
import AddWorkout from '../../components/workout/add-workout.vue';
import {onMounted, ref} from 'vue';
import workoutService from '../../shared/services/workout-service';
import WorkoutItem from '../../components/workout/workout-item.vue';

const workoutListData = ref([]);

onMounted(async () => {
  try {
    workoutListData.value = await workoutService.getWorkoutList();
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <GlobalAccordion title="Add new Workout">
    <template v-slot:body>
      <AddWorkout></AddWorkout>
    </template>
  </GlobalAccordion>

  <div class="mt-10 flex flex-col gap-5">

    <div v-for="workout of workoutListData">
      <GlobalAccordion>
        <template v-slot:header>
          <h4 class="font-bold px-5 py-3 border-2 border-neon-green-default text-neon-green-default
          hover:bg-neon-green-hover hover:text-black">
            {{ workout.name }}
          </h4>
        </template>
        <template v-slot:body>
          <WorkoutItem :workout="workout"></WorkoutItem>
        </template>
      </GlobalAccordion>
    </div>

  </div>
</template>

<style scoped>

</style>
