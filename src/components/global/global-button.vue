<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
  text: string,
  btnType?: 'btn-primary' | 'btn-secondary',
  btnCls?: string,
  type?: 'button' | 'submit' | 'reset'
}>();

const buttonClasses = computed<string[]>(() => {
  return [props.btnType ? props.btnType : 'btn-primary', props.btnCls]
});
</script>

<template>
  <button :type="props.type ? props.type : 'button'" :class="buttonClasses">
    {{ props.text}}
  </button>
</template>

<style scoped>

</style>
