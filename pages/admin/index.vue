<script setup>
definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <main class="flex flex-col p-4 md:ml-64 h-auto">
    <div class="flex justify-center">
      <ClientOnly>
        <BarChart />
        <LineChart />
      </ClientOnly>
    </div>
  </main>
</template>
