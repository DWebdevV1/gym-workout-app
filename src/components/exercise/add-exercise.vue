<script setup lang="ts">
import {reactive} from 'vue';
import {Exercise} from '../../shared/models/Exercise';
import GlobalInput from '../global/global-input.vue';
import GlobalButton from '../global/global-button.vue';
import exerciseService from '../../shared/services/exercise-service';
import {useRouter} from 'vue-router';

const router = useRouter();
const exerciseData: Exercise = reactive({
  title: '',
  description: '',
  banner: '',
  images: [],
  videos: []
});

//TODO Check for Validation of Data (Frontend & Backend)
//TODO  replace with real validity check and notification later
const addNewExercise = () => {
  if (exerciseData.title && exerciseData.description && exerciseData.banner) {
    exerciseData.banner = 'https://via.placeholder.com/250';

    exerciseService.addExercise(exerciseData)
        .then(res => {
          console.log('Exercise Data successfully added!', res);
          router.go(0);
        });
  } else {
    console.log('No valid exercise Data');
  }
};

</script>

<template>
  <div>
    <form class="grid grid-cols-1 gap-8 p-2 max-w-4xl" @submit.prevent="addNewExercise">

      <GlobalInput v-model="exerciseData.title"
                   label="Title"
                   input-id="exercise_title"
                   input-name="exercise_title"
                   type="text"
                   placeholder="Title"
                   global-classes="flex flex-col gap-2"
                   label-classes="w-full"
                   input-classes="w-full">
      </GlobalInput>

      <GlobalInput v-model="exerciseData.description"
                   label="Description"
                   input-id="exercise_description"
                   input-name="exercise_description"
                   type="text"
                   placeholder="Description"
                   global-classes="flex flex-col gap-2"
                   label-classes="w-full"
                   input-classes="w-full">
      </GlobalInput>

      <GlobalInput v-model="exerciseData.banner"
                   label="Banner"
                   input-id="exercise_banner"
                   input-name="exercise_banner"
                   type="text"
                   placeholder="Banner"
                   global-classes="flex flex-col gap-2"
                   label-classes="w-full"
                   input-classes="w-full">
      </GlobalInput>

      <GlobalButton text="Save Data" type="submit" btn-type="btn-primary"></GlobalButton>

    </form>
  </div>
</template>

<style scoped>

</style>