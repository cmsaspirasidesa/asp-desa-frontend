<script setup>
const listAspirations = ref([]);

async function getAspirations() {
  const {data} = await useFetch("http://localhost:8000/aspirations", {
    method: "GET",
  })
  listAspirations.value = data.value.data.data;
}

onMounted(async () => {
  setTimeout(() => {
    getAspirations()
  }, 100);
});

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/user",
  },
});
</script>

<template>
  <section id="home-section" class="top-0 bg-slate-200 dark:bg-gray-900">
    <div class="flex justify-around max-w-screen-xl px-4 py-4 mx-auto lg:gap-0 xl:gap-0">
      <div class="w-full lg:max-w-2xl">
        <FormAspirasi />
      </div>
      <div class="hidden lg:flex lg:flex-col">
        <GuestRegisCard />
      </div>
    </div>
  </section>

  <section id="aspirasi-section" class="bg-gray-50 py-14">
    <h2 class="mb-8 text-4xl font-extrabold text-gray-900 text-center">
      Daftar Aspirasi
    </h2>
    <div class="flex gap-10 justify-center flex-wrap">
      <div v-for="aspiration of listAspirations" :key="aspiration.id"
        class="w-[350px] p-6 border border-solid border-gray-300 rounded-[12px]">
        <div class="group">
          <div class="overflow-hidden rounded-md group-hover:opacity-75 h-[300px] bg-slate-400">
            <div v-if="aspiration.Images.length <= 0" class="flex justify-center items-center h-full w-full flex-col">
              <Icon name="heroicons-solid:photo" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
              <p class="text-2xl text-center font-semibold text-gray-300 mt-2">No Image</p>
            </div>
            <img v-else :src="aspiration.Images[0].url" alt="Aspiration Image"
              class="object-cover object-center w-full h-full" />
          </div>

          <div class="flex justify-between mt-4">
            <div>
              <h3 class="mr-2 text-lg font-medium text-gray-700 line-clamp-1">
                {{ aspiration.judul }}
              </h3>
            </div>
            <p
              class="px-2 py-1 text-sm font-medium text-center text-gray-900 border border-gray-300 border-solid rounded-md">
              {{ aspiration.status }}
            </p>
          </div>
          <div class="h-[80px]">
            <p class="mt-3 text-sm text-justify text-gray-500 line-clamp-4">
              {{ aspiration.deskripsi }}
            </p>
          </div>
          <div class="mt-5">
            <NuxtLink :to="'/detail-aspirasi/' + aspiration.id" class="px-4 py-2 text-white bg-indigo-600 rounded-md">
              Detail
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
