<script setup lang="ts">
import {Workout} from '../../shared/models/Workout';

const props = defineProps<{ workout: Workout }>();
</script>

<template>
  <div>
    <h4>{{ props.workout.name }}</h4>
  </div>
</template>

<style scoped>

</style>
