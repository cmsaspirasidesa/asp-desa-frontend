<script setup>
import {initFlowbite} from 'flowbite';
onMounted(() => {
  initFlowbite();
})
</script>
<template>
  <div>
    <GuestNavbar />
    <slot />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
