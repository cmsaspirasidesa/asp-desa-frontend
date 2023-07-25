<script setup>
import {onMounted} from 'vue';
import {initFlowbite} from 'flowbite';

onMounted(() => {
  initFlowbite();
});

definePageMeta({
  layout: 'register',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/user',
  }
});
</script>

<template>
  <FormRegister />
</template>
