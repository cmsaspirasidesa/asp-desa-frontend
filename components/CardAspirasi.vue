<template>
  <div
    class="max-w-[350px] p-6 mx-auto border border-solid border-gray-300 rounded-[12px]"
  >
    <div :key="aspirations.id" class="group relative">
      <div class="h-[250px] overflow-hidden rounded-md group-hover:opacity-75">
        <img
          :src="aspirations.imageSrc"
          alt="Gambar Aspirasi"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-lg font-medium text-gray-700">
            {{ aspirations.headline }}
          </h3>
        </div>
        <p
          class="text-sm font-medium border border-solid border-gray-300 rounded-md px-2 py-1 text-gray-900"
        >
          {{ aspirations.status }}
        </p>
      </div>
      <p class="mt-3 text-justify text-sm line-clamp-4 text-gray-500">
        {{ aspirations.description }}
      </p>
      <div class="mt-5">
        <a href="#" class="px-4 py-2 bg-indigo-600 rounded-md text-white"
          >Detail</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  aspirations: {
    type: Object,
  },
});
</script>
