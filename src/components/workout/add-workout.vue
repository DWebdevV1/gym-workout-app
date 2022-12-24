<script setup lang="ts">
import GlobalInput from '../global/global-input.vue';
import {reactive} from 'vue';
import {Workout} from '../../shared/models/Workout';
import GlobalButton from '../global/global-button.vue';

const workoutData: Workout = reactive({
  name: ''
});

const addWorkout = () => {
  console.log('addWorkout workouts', workoutData);
};
</script>

<template>
  <form @submit.prevent="addWorkout">

    <GlobalInput v-model="workoutData.name"
                 label="Workout Name"
                 input-id="workout_name"
                 input-name="workout_name"
                 type="text"
                 placeholder="Workout Name"
                 global-classes="flex flex-col gap-2 w-full">
    </GlobalInput>

    <GlobalButton text="Save Data" type="submit" btn-type="btn-primary" btn-cls="w-full mt-8"></GlobalButton>

  </form>
</template>

<style scoped>

</style>