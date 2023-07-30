<script setup>
const listAspirations = reactive({});
const headers = useRequestHeaders(["cookie"]);
const {data: token} = await useFetch("/api/token", {headers});
const backLink = ref('')
const route = useRoute();
const {status} = useAuth()

async function getDetailAspirations() {
  const {data} = await useFetch(`http://localhost:8000/aspirations/${route.params.id}`, {
    method: "GET",
  });

  listAspirations.value = data.value.data;
}

onMounted(async () => {
  setTimeout(() => {
    getDetailAspirations()
  }, 100);
  if (status.value === 'authenticated') {
    if (token.value.role === 'USER') {
      backLink.value = '/user'
    } else if (token.value.role === 'ADMIN') {
      backLink.value = '/admin/aspirasi'
    } else {
      backLink.value = '/'
    }
  }
});

definePageMeta({
  layout: "user",
  auth: {}
});
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-center items-center gap-8 mt-6">
    <div class="lg:w-2/5 rounded-md overflow-hidden">
      <NuxtLink v-if="status === 'authenticated'" :to="backLink" class="relative z-10">
        <Icon name="heroicons-solid:arrow-left" size="24px" class="text-white absolute top-4 left-4" />
      </NuxtLink>
      <NuxtLink v-else to="/" class="relative z-10">
        <Icon name="heroicons-solid:arrow-left" size="24px" class="text-white absolute top-4 left-4" />
      </NuxtLink>
      <el-carousel :interval="5000" arrow="always" height="500px">
        <div v-for="aspiration of listAspirations">
          <div v-if="aspiration.Images.length <= 0"
            class="flex justify-center items-center h-[500px] w-full bg-slate-500 flex-col">
            <Icon name="heroicons-solid:photo" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
            <p class="text-2xl text-center font-semibold text-gray-300 mt-2">No Image</p>
          </div>
          <el-carousel-item v-else v-for="image of aspiration.Images" :key="image.id">
            <NuxtImg :src="image.url" class="object-cover object-center h-full w-full" />
          </el-carousel-item>
        </div>
      </el-carousel>
    </div>

    <div v-for="aspiration of listAspirations" class="w-2/5">
      <div class="mt-5">
        <h2 class="text-2xl font-bold lg:text-3xl md:text-3xl">Deskripsi</h2>
        <p class="mt-4 text-md lg:text-lg md:text-lg">
          {{ aspiration.deskripsi }}
        </p>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl font-bold lg:text-3xl md:text-3xl">Lokasi</h2>
        <p class="mt-2 text-md lg:text-lg md:text-lg">
          {{ aspiration.lokasi }}
        </p>
      </div>
      <div class="mt-6" v-if="aspiration.komentar">
        <h2 class="text-2xl font-bold lg:text-3xl md:text-3xl">Komentar</h2>
        <p class="mb-2 text-2xl font-bold lg:text-3xl md:text-3xl">
          {{ aspiration.komentar }}
        </p>
      </div>
      <div class="mt-6">
        <span
          class="text-black focus:ring-4 focus:ring-blue-300 font-semibold rounded-md mr-2 mb-2 text-xl px-2.5 py-1 bg-amber-500"
          :class="{
            'bg-blue-500 text-white': aspiration.status === 'Submitted',
            'bg-amber-500': aspiration.status === 'Processed',
            'bg-emerald-500': aspiration.status === 'Done',
          }">
          {{
            aspiration.status === "Submitted" ? "Diajukan" : aspiration.status === "Processed" ?
            "Diproses" : aspiration.status === "Done" ? "Selesai" : aspiration.status
          }}
        </span>
      </div>
    </div>
  </div>
</template>
