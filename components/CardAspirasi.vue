<template>
  <div class="max-w-[280px] p-6 mx-auto mb-3 border border-solid border-gray-300 rounded-[12px]">
    <div :key="aspirasi.id" class="group relative">
      <div class="h-[250px] overflow-hidden rounded-md group-hover:opacity-75">
        <img
          :src="aspirations.imageSrc"
          alt="Gambar Aspirasi"
          class="object-cover object-center w-full h-full"
        />
      </div>
      <div class="flex justify-between mt-4">
        <div>
          <h3 class="text-lg font-medium text-gray-700">
            {{ aspirations.subject }}
          </h3>
        </div>
        <p
          class="px-2 py-1 text-sm font-medium text-gray-900 border border-gray-300 border-solid rounded-md"
        >
          {{ aspirations.status }}
        </p>
      </div>
      <p class="mt-3 text-sm text-justify text-gray-500 line-clamp-4">
        {{ aspirations.description }}
      </p>
      <div class="mt-5">
        <a href="#" class="px-4 py-2 text-white bg-indigo-600 rounded-md"
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
