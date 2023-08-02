<script setup>
const {status} = useAuth()
import {initFlowbite} from 'flowbite';
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div>
    <UserNavbar v-if="status === 'authenticated'" />
    <slot />
  </div>
</template>