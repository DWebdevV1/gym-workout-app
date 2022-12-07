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
  <div class="area max-w-4xl">

    <div class="flex items-center justify-between">
      <h1 class="text-neon-green-default">Add new Exercise</h1>
      <GlobalButton text="New Exercise" type="button" btn-cls="btn-primary" @click="toggleInputs"></GlobalButton>
    </div>
    <div v-if="showInputs" class="my-5 border-2 border-neon-green-default rounded-3xl p-5">
      <form class="grid grid-cols-1 gap-6 p-2" @submit.prevent="addNewExercise">

        <GlobalInput v-model="exerciseData.title"
                     label="Title"
                     input-id="exercise_title"
                     input-name="exercise_title"
                     type="text"
                     placeholder="Title"
                     label-classes="flex-[20]"
                     input-classes="flex-[70]">
        </GlobalInput>

        <GlobalInput v-model="exerciseData.description"
                     label="Description"
                     input-id="exercise_description"
                     input-name="exercise_description"
                     type="text"
                     placeholder="Description"
                     label-classes="flex-[20]"
                     input-classes="flex-[70]">
        </GlobalInput>

        <GlobalInput v-model="exerciseData.banner"
                     label="Banner"
                     input-id="exercise_banner"
                     input-name="exercise_banner"
                     type="text"
                     placeholder="Banner"
                     label-classes="flex-[20]"
                     input-classes="flex-[70]">
        </GlobalInput>

        <GlobalButton text="Save Data" type="submit" btn-cls="btn-primary"></GlobalButton>

      </form>
    </div>

  </div>
</template>

<style scoped>

</style>