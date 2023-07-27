<script setup>
import { ref } from "vue";

const search = ref("");
</script>

<template>
  <form
    @submit.prevent="submit"
  >
    <div class="relative w-full flex flex-row">
      <input
        type="search"
        id="search-dropdown"
        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-gray-300 focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-500"
        placeholder="Cari Aspirasi ..."
        v-model="search"
      />
      <button
        type="submit"
        class="py-2.5 px-4 lg:px-6 text-sm font-medium h-full text-gray-500 rounded-r-lg bg-indigo-600"
        :disabled="search === ''"
      >
        <Icon
          name="heroicons:magnifying-glass-solid"
          size="20px"
          class="text-white text-bold"
        />
      </button>
    </div>
  </form>
</template>
