<template>
  <div
    class="max-w-[350px] p-6 mx-auto border border-solid border-gray-300 rounded-[12px]"
  >
    <div :key="listAspirations.id" class="relative group">
      <div
        class="h-[250px] overflow-hidden rounded-md group-hover:opacity-75"
        v-for="(image, index) in listAspirations.Images"
        :key="image.url"
        v-show="index === 0"
      >
        <img
          :src="image.url"
          alt="Aspiration Image"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="flex justify-between mt-4">
        <div>
          <h3 class="mr-2 text-lg font-medium text-gray-700">
            {{ listAspirations.judul }}
          </h3>
        </div>
        <p
          class="px-2 py-1 text-sm font-medium text-center text-gray-900 border border-gray-300 border-solid rounded-md"
        >
          {{ listAspirations.status }}
        </p>
      </div>
      <p class="mt-3 text-sm text-justify text-gray-500 line-clamp-4">
        {{ listAspirations.deskripsi }}
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
  listAspirations: {
    type: Object,
  },
});
</script>
