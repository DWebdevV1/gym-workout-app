<script setup lang="ts">

const props = defineProps<{
  modelValue: any,
  label: string,
  inputId: string,
  inputName: string,
  type?: string,
  placeholder?: string
  labelClasses?: string,
  inputClasses?: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): string
}>();

const onInput = (e: any) => emit('update:modelValue', e.target.value);

</script>

<template>
  <div class="flex items-center gap-5 text-lg">
    <label :class="labelClasses" for="id">{{ label }}</label>
    <input class="rounded-full px-5 py-2 border-none outline-none shadow-none text-black focus:ring-neon-green-default focus:ring-2"
           @input="onInput"
           :value="props.modelValue"
           :class="inputClasses"
           :id="props.inputId"
           :name="props.inputName"
           :type="props.type ? props.type : 'text'"
           :placeholder="props.placeholder ? props.placeholder : ''"
    />
  </div>
</template>

<style scoped>

</style>