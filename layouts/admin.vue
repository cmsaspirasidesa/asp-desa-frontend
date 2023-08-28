<script setup>
import {initFlowbite} from 'flowbite';
onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <div>
    <UserNavbar />
    <slot />
    <AdminSidebar />
  </div>
</template>