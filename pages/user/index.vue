<script setup>
import * as jose from "jose";
const headers = useRequestHeaders(["cookie"]);
const { data: token } = await useFetch("/api/token", { headers });
const { signOut } = useAuth();
const dataToken = jose.decodeJwt(token.value.jwt);
const page = ref(1);
const pageSize = ref(10);
const search = ref("");

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut();
  }
});
const listAspirations = ref([]);

const { data: listAspirations } = await useFetch(
  () =>
    `http://localhost:8000/useraspirations?page=${page.value}&search=${search.value}`,
  {
    method: "GET",
    headers: {
      Authorization: token.value.jwt,
    },
    watch: [search, page],
  }
);

definePageMeta({
  layout: "user",
  middleware: ["admin"],
});
</script>

<template>
  <div class="flex flex-col md:flex-row mt-8">
    <div class="md:w-2/5 items-start min-w-[300px] mx-2 lg:mx-0">
      <FormAspirasiUser />
    </div>
    <div class="md:w-3/5 mt-16 md:mt-0">
      <div class="flex flex-wrap mt-8 gap-6 justify-center">
        <div class="md:w-3/5 mt-16 md:mt-0">
          <div class="relative lg:w-[95%] mx-auto w-[80%]">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="ic:round-search" size="20" class="text-gray-500" />
            </div>
            <input
              v-model="search"
              @input="() => (page = 1)"
              type="text"
              id="table-search"
              class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari nama, nik, atau email"
            />
          </div>
        </div>
        <div
          v-for="aspiration of listAspirations.data.data"
          :key="aspiration.id"
          class="lg:max-w-[350px] max-w-[250px] p-6 border border-solid border-gray-300 rounded-[12px]"
        >
          <div class="group">
            <div
              class="overflow-hidden rounded-md group-hover:opacity-75 h-[300px] bg-slate-400"
            >
              <div
                v-if="aspiration.Images.length <= 0"
                class="flex justify-center items-center h-full w-full flex-col"
              >
                <Icon
                  name="heroicons-solid:photo"
                  class="w-12 h-12 mx-auto text-gray-300"
                  aria-hidden="true"
                />
                <p
                  class="text-2xl text-center font-semibold text-gray-300 mt-2"
                >
                  No Image
                </p>
              </div>
              <img
                v-else
                :src="aspiration.Images[0].url"
                alt="Aspiration Image"
                class="object-cover object-center w-full h-full"
              />
            </div>

            <div class="flex justify-between mt-4">
              <div>
                <h3 class="mr-2 text-lg font-medium text-gray-700 line-clamp-1">
                  {{ aspiration.judul }}
                </h3>
              </div>
              <p
                v-if="aspiration.status === 'Submitted'"
                class="px-2 py-1 text-sm font-medium text-center border border-gray-300 border-solid rounded-md bg-blue-500 text-white"
              >
                {{ aspiration.status }}
              </p>
              <p
                v-else-if="aspiration.status === 'Processed'"
                class="px-2 py-1 text-sm font-medium text-center border border-gray-300 border-solid rounded-md bg-amber-500 text-white"
              >
                {{ aspiration.status }}
              </p>
              <p
                v-else
                class="px-2 py-1 text-sm font-medium text-center border border-gray-300 border-solid rounded-md bg-green-500 text-white"
              >
                {{ aspiration.status }}
              </p>
            </div>
            <div class="h-[80px]">
              <p class="mt-3 text-sm text-justify text-gray-500 line-clamp-4">
                {{ aspiration.deskripsi }}
              </p>
            </div>
            <div class="mt-5">
              <NuxtLink
                :to="'/detail-aspirasi/' + aspiration.id"
                class="px-4 py-2 text-white bg-indigo-600 rounded-md"
              >
                Detail
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <nav
        class="flex items-center justify-between pt-4 lg:w-[95%] mx-auto w-[80%]"
        aria-label="Table navigation"
      >
        <div>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
            >Menampilkan
            <span class="font-semibold text-gray-900 dark:text-white">
              {{ `1-${listAspirations.data.data.length}` }}
            </span>
            dari
            <span class="font-semibold text-gray-900 dark:text-white">
              {{ listAspirations.data.total }}
            </span>
          </span>
        </div>
        <div v-if="listAspirations.data.total > pageSize">
          <nav aria-label="pagination">
            <ul class="flex items-center -space-x-px h-8 text-sm">
              <li>
                <button
                  @click="page = 1"
                  class="flex items-center justify-center px-2 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="hover:text-cyan-500">Awal</span>
                </button>
              </li>
              <li>
                <button
                  v-if="page > 1"
                  @click="page--"
                  class="flex items-center justify-center px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <Icon
                    name="ic:baseline-arrow-left"
                    size="25"
                    class="hover:text-cyan-500"
                  />
                </button>
              </li>
              <li>
                <span
                  aria-current="page"
                  class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  {{ page }}
                </span>
              </li>
              <li>
                <button
                  v-if="page < listAspirations.data.total_page"
                  @click="page++"
                  class="flex items-center justify-center px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <Icon
                    name="ic:baseline-arrow-right"
                    size="25"
                    class="hover:text-cyan-500"
                  />
                </button>
              </li>
              <li>
                <button
                  @click="page = listAspirations.data.total_page"
                  class="flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="hover:text-cyan-500">Akhir</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  </div>
</template>
