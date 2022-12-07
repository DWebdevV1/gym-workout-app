<script setup lang="ts">
import {reactive, ref} from 'vue';
import {Exercise} from '../../shared/models/Exercise';
import GlobalInput from '../global/global-input.vue';
import GlobalButton from '../global/global-button.vue';
import exerciseService from '../../shared/services/exercise-service';
import {useRouter} from 'vue-router';

const router = useRouter();
const showInputs = ref<boolean>(true);
const exerciseData: Exercise = reactive({
  title: '',
  description: '',
  banner: '',
  images: [],
  videos: []
});

const toggleInputs = () => showInputs.value = !showInputs.value;

//TODO Check for Validation of Data (Frontend & Backend)
const addNewExercise = () => {
  exerciseData.banner = 'https://via.placeholder.com/250';

  exerciseService.addExercise(exerciseData)
      .then(res => {
        console.log('Exercise Data successfully added!', res);
        router.go(0);
      });
};

</script>

<template>
  <div class="area">

    <div class="flex flex-col items-center justify-between">
      <h1 class="text-neon-green-default w-full">Add new Exercise</h1>
      <GlobalButton text="New Exercise" type="button" btn-cls="w-full my-4" btn-type="btn-secondary" @click="toggleInputs"></GlobalButton>
    </div>
    <div v-if="showInputs" class="my-5 border-2 border-neon-green-default rounded-3xl p-5">
      <form class="grid grid-cols-1 gap-6 p-2 max-w-4xl" @submit.prevent="addNewExercise">

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

  </div>
</template>

<style scoped>

</style>
