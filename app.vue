<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import 'tw-elements/dist/css/tw-elements.min.css'

onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
