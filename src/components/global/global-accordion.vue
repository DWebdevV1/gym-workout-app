<script setup lang="ts">

import {ref} from 'vue';

const props = defineProps<{
  title: string
}>()

const showAccordionHeader = ref(true);
const toggleAccordionHeader = () => showAccordionHeader.value = !showAccordionHeader.value;

</script>

<template>
  <h4 class="bg-neon-green-default text-black font-bold px-5 py-3 select-none hover:cursor-pointer"
      @click="toggleAccordionHeader">{{ props.title }}</h4>
  <div v-show="showAccordionHeader" class="bg-gray-600 px-3 py-5">
    <slot name="body"></slot>
  </div>
</template>

<style scoped>

</style>
