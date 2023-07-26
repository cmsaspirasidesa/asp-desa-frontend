<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['user'],
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
