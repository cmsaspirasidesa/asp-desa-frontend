<script setup>
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
