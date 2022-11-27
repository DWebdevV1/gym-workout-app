<script setup lang="ts">

const props = defineProps<{
  text: string,
  btnCls?: 'btn-primary' | 'btn-secondary',
  type?: 'button' | 'submit' | 'reset'
}>();

</script>

<template>
  <button :type="props.type ? props.type : 'button'"
          :class="props.btnCls ? props.btnCls : 'btn-primary'">
    {{ props.text}}
  </button>
</template>

<style scoped>

</style>