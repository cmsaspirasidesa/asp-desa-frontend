<script setup>
definePageMeta({
  layout: 'admin',
});
</script>

<template>
  <main class="flex flex-col gap-5 p-4 md:ml-64 h-auto">
    <div class="flex justify-center">
      <ClientOnly>
        <BarChart />
        <LineChart />
      </ClientOnly>
    </div>
    <div class="flex">
      <div class="flex flex-col flex-1">
        <div>
          <h1 class="text-xl">Majemen User</h1>
        </div>
        <div>
          <UserTable />
        </div>
        <div>
          <PaginationBlock />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col flex-1">
        <div>
          <UserTable />
        </div>
        <div>
          <PaginationBlock />
        </div>
      </div>
    </div>
  </main>
</template>
