<template>
  <div class="bg-slate-400">
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div v-for="image of contentAspiration.Images" class="hidden duration-700 ease-in-out" data-carousel-item>
          <img :src="image.url" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="...">
        </div>
      </div>
      <button type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 1 1 5l4 4" />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next>
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 9 4-4-4-4" />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>

    <p>{{ contentAspiration.Images }}</p>
    <div class="mt-5">
      <h2 class="text-2xl font-bold lg:text-3xl md:text-3xl">Deskripsi</h2>
      <p class="mt-4 text-md lg:text-lg md:text-lg">
        {{ contentAspiration.deskripsi }}
      </p>
    </div>
    <div class="mt-4">
      <h2 class="text-2xl font-bold lg:text-3xl md:text-3xl">Lokasi</h2>
      <p class="mt-2 text-md lg:text-lg md:text-lg">
        {{ contentAspiration.lokasi }}
      </p>
    </div>
    <div class="mt-6">
      <h3 class="mb-2 text-2xl font-bold lg:text-3xl md:text-3xl">
        {{ contentAspiration.komentar }}
      </h3>
      <p>-</p>
    </div>
    <div class="mt-5">
      <span
        class="text-black focus:ring-4 focus:ring-blue-300 font-semibold rounded-md mr-2 mb-2 text-xl px-2.5 py-1 bg-amber-500"
        :class="{
          'bg-blue-500 text-white': contentAspiration.status === 'Submitted',
          'bg-amber-500': contentAspiration.status === 'Processed',
          'bg-emerald-500': contentAspiration.status === 'Done',
        }">
        {{
          contentAspiration.status === "Submitted" ? "Diajukan" : contentAspiration.status === "Processed" ?
          "Diproses" : contentAspiration.status === "Done" ? "Selesai" : contentAspiration.status
        }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  contentAspiration: {
    type: Object,
  },
});
</script>
