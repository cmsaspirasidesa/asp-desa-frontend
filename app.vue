<script setup>
import { initFlowbite } from 'flowbite';
onMounted(() => {
  initFlowbite();
});
</script>
<template>
  <div>
    <Head>
      <Title>Aspirasi Desa</Title>
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
