<script setup>
import * as jose from 'jose'
const headers = useRequestHeaders(['cookie']);
const {data: token} = await useFetch('/api/token', {headers});
const {signOut} = useAuth()
const dataToken = jose.decodeJwt(token.value.jwt)

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut()
  }
})
const listAspirations = ref([]);

async function getUserAspirations() {
  const {data} = await useFetch('http://localhost:8000/useraspirations/', {
    method: "GET",
    headers: {
      Authorization: token.value.jwt,
    }
  })
  listAspirations.value = data.value.data;
}

onMounted(async () => {
  setTimeout(() => {
    getUserAspirations()
  }, 100);
});

definePageMeta({
  layout: "user",
  middleware: ['admin'],
});
</script>

<template>
  <div class="flex flex-col md:flex-row mt-8">
    <div class="md:w-2/5 items-start min-w-[300px] mx-2 lg:mx-0">
      <FormAspirasiUser />
    </div>
    <div class="md:w-3/5 mt-16 md:mt-0">
      <FormSearch class="lg:w-[95%] mx-auto w-[80%]" />
      <div class="flex flex-wrap mt-8 gap-6 justify-center">
        <div v-for="aspiration of listAspirations" :key="aspiration.id"
          class="lg:max-w-[350px] max-w-[250px] p-6 border border-solid border-gray-300 rounded-[12px]">
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
    </div>
  </div>
</template>
