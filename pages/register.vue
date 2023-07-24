<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});

definePageMeta({
  layout: 'register',
});
</script>

<template>
  <FormRegister />
</template>
