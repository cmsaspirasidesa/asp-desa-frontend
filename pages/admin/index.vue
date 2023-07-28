<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['user'],
})
import * as jose from 'jose'
const headers = useRequestHeaders(['cookie']);
const {data: token} = await useFetch('/api/token', {headers});
const {signOut} = useAuth()
const dataToken = jose.decodeJwt(token.value.jwt)

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut()
  }
})
</script>
<template>
  <main class="flex flex-col h-auto p-4 md:ml-64">
    <div class="flex justify-center">
      <ClientOnly>
        <BarChart />
        <LineChart />
      </ClientOnly>
    </div>
  </main>
</template>
