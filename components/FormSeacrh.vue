<script setup>
import {MagnifyingGlassIcon} from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="mx-2">
    <div class="relative m-auto text-gray-600 max-w-[300px] w-full mt-10">
      <input class="border-2 border-gray-300 w-full bg-white h-10 rounded-lg text-sm focus:outline-none" type="search"
        name="search" placeholder="Search">
      <button type="submit" class="absolute right-0 -top-2 mt-5 mr-4">
        <MagnifyingGlassIcon class="text-gray-600 h-4 w-4 fill-current" />
      </button>
    </div>
  </div>
</template>