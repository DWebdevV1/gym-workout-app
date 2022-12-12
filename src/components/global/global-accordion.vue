<script setup lang="ts">
import {ref, useSlots} from 'vue';

const props = withDefaults(defineProps<{
  title?: string,
  isOpen?: boolean
}>(), {
  isOpen: true
});

const slots = useSlots();
const showAccordionHeader = ref(props.isOpen);
const toggleAccordionHeader = () => showAccordionHeader.value = !showAccordionHeader.value;
</script>

<template>
  <div v-if="slots?.header" @click="toggleAccordionHeader" class="select-none hover:cursor-pointer">
    <slot name="header"></slot>
  </div>
  <div v-else>
    <h4 class="bg-neon-green-default text-black font-bold px-5 py-3 select-none hover:cursor-pointer"
        @click="toggleAccordionHeader">{{ props.title }}</h4>
  </div>
  <div v-show="showAccordionHeader" class="bg-gray-600 px-3 py-5">
    <template v-if="slots?.body">
      <slot name="body"></slot>
    </template>
    <template v-else>
      <p class="text-center">No accordion data yet</p>
    </template>
  </div>
</template>

<style scoped>

</style>
