<script setup>
const {status} = useAuth()
</script>

<template>
  <div>
    <UserNavbar v-if="status === 'authenticated'" />
    <slot />
  </div>
</template>