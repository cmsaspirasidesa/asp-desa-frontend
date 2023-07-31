<script setup>
definePageMeta({
  layout: "register",
  auth: {}
});
const headers = useRequestHeaders(["cookie"]);
const {data: token} = await useFetch("/api/token", {headers});
const backLink = ref('')
const route = useRoute();
const {status} = useAuth()
if (status.value === 'authenticated') {
  if (token.value.role === 'USER') {
    backLink.value = '/user'
  }
  if (token.value.role === 'ADMIN') {
    backLink.value = '/admin/aspirasi'
  }
}

const {data: aspirasi} = await useFetch(`http://localhost:8000/aspirations/${route.params.id}`, {
  method: "GET",
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
        <div>
          <div v-if="aspirasi.data.Images.length <= 0"
            class="flex justify-center items-center h-[500px] w-full bg-slate-500 flex-col">
            <Icon name="heroicons-solid:photo" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
            <p class="text-2xl text-center font-semibold text-gray-300 mt-2">No Image</p>
          </div>
          <el-carousel-item v-else v-for="image of aspirasi.data.Images" :key="image.id" class="bg-slate-500">
            <img :src="image.url" class="object-cover object-center h-full w-full" />
          </el-carousel-item>
        </div>
      </el-carousel>
    </div>

    <div class="w-2/5">
      <div class="mt-5">
        <h2 class="text-2xl font-semibold lg:text-3xl md:text-4xl">{{ aspirasi.data.judul }}</h2>
      </div>
      <div class="mt-5">
        <h2 class="text-2xl lg:text-3xl md:text-3xl">Deskripsi</h2>
        <p class="mt-4 text-md lg:text-lg md:text-lg">
          {{ aspirasi.data.deskripsi }}
        </p>
      </div>
      <div class="mt-4">
        <h2 class="text-2xl lg:text-3xl md:text-3xl">Lokasi</h2>
        <p class="mt-2 text-md lg:text-lg md:text-lg">
          {{ aspirasi.data.lokasi }}
        </p>
      </div>
      <div class="mt-6" v-if="aspirasi.data.komentar">
        <h2 class="text-2xl font-bold lg:text-3xl md:text-3xl">Komentar</h2>
        <p class="mb-2 text-2xl font-bold lg:text-3xl md:text-3xl">
          {{ aspirasi.data.komentar }}
        </p>
      </div>
      <div class="mt-6">
        <span
          class="text-black focus:ring-4 focus:ring-blue-300 font-semibold rounded-md mr-2 mb-2 text-xl px-2.5 py-1 bg-amber-500"
          :class="{
            'bg-blue-500 text-white': aspirasi.data.status === 'Submitted',
            'bg-amber-500 text-white': aspirasi.data.status === 'Processed',
            'bg-emerald-500 text-white': aspirasi.data.status === 'Done',
          }">
          {{
            aspirasi.data.status === "Submitted" ? "Diajukan" : aspirasi.data.status === "Processed" ?
            "Diproses" : aspirasi.data.status === "Done" ? "Selesai" : aspirasi.data.status
          }}
        </span>
      </div>
    </div>
  </div>
</template>
