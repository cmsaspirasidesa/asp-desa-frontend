<template>
  <div>
    <p>Sign-In Options:</p>
    <button class="p-4 mr-6 bg-blue-500"
      @click="signIn('credentials', { email: 'admin1@gmail.com', password: '123', page: 'login' })">in</button>
    <button class="p-4 bg-red-500" @click="signOut()">out</button>
    <p>{{ status }}</p>
    <p>{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  auth: {
    // unauthenticatedOnly: true,
    // navigateAuthenticatedTo: '/jaga',
  }
})
const { signIn, signOut, status, data } = useAuth()
</script>