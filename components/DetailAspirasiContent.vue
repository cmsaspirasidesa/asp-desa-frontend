<template>
  <Carousel :aspirationGambar="contentAspiration.Images" />
  <div
    class="flex flex-col w-full px-5 pt-10 pb-16 mx-auto bg-gray-200 xl:px-24 xl:pt-20 lg:pt-16 lg:px-16 md:py-16 md:px-16 md:mt-0"
    L>
    <div>
      <h1 class="text-2xl font-bold capitalize lg:text-4xl md:text-4xl">
      </h1>
    </div>
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
      <!-- <span
        class="text-black focus:ring-4 focus:ring-blue-300 font-semibold rounded-md mr-2 mb-2 text-xl px-2.5 py-1 bg-amber-500">Done</span> -->
      <span
        class="text-black focus:ring-4 focus:ring-blue-300 font-semibold rounded-md mr-2 mb-2 text-xl px-2.5 py-1 bg-amber-500"
        :class="{
          'bg-blue-500 text-white': contentAspiration.status === 'Submitted',
          'bg-amber-500': contentAspiration.status === 'Processed',
          'bg-emerald-500': contentAspiration.status === 'Done',
        }">{{
  contentAspiration.status === "Submitted"
  ? "Diajukan"
  : contentAspiration.status === "Processed"
    ? "Diproses"
    : contentAspiration.status === "Done"
      ? "Selesai"
      : contentAspiration.status
}}</span>
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
