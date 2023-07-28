<template>
  <div>
    <div class="w-[350px] p-6 mx-5 border border-solid border-gray-300 rounded-[12px]">
      {{ aspirationId }}
      <div :key="aspirationUser.id" class="relative group">
        <div class="overflow-hidden rounded-md group-hover:opacity-75" v-for="(image, index) in aspirationUser.Images"
          :key="image.url" v-show="index === 1">
          <img :src="image.url" alt="Aspiration Image" class="object-cover object-center w-full h-full" />
        </div>

        <div class="flex justify-between mt-4">
          <div>
            <h3 class="mr-2 text-lg font-medium text-gray-700">
              {{ aspirationUser.judul }}
            </h3>
          </div>
          <p
            class="px-2 py-1 text-sm font-medium text-center text-gray-900 border border-gray-300 border-solid rounded-md">
            {{ aspirationUser.status }}
          </p>
        </div>
        <p class="mt-3 text-sm text-justify text-gray-500 line-clamp-4">
          {{ aspirationUser.deskripsi }}
        </p>
        <div class="mt-5">
          <!-- <a href="#" class="px-4 py-2 text-white bg-indigo-600 rounded-md"
            >Detail</a
          > -->
          <NuxtLink :to="'/detail-aspirasi/' + aspirationId" class="px-4 py-2 text-white bg-indigo-600 rounded-md">
            Detail
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  aspirationUser: {
    type: Object,
  },
  aspirationId: String,
});
</script>
