<script setup>
import * as jose from 'jose';
const headers = useRequestHeaders(['cookie']);
const { data: token } = await useFetch('/api/token', { headers });
const { signOut } = useAuth();
const dataToken = jose.decodeJwt(token.value.jwt);
const page = ref(1);
const pageSize = ref(10);
const search = ref('');
const aspirations = ref([]);
const addedId = ref('');
const filter = ref('');

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut();
  }
});

const { data: aspList } = await useFetch(
  () =>
    `http://localhost:8000/useraspirations?page=${page.value}&search=${search.value}&filter=${filter.value}`,
  {
    method: 'GET',
    headers: {
      Authorization: token.value.jwt,
    },
    watch: [search, page, addedId],
  }
);

console.log(aspList.value.data);

watchEffect(() => {
  aspirations.value = aspList.value.data;
});

function handleAddAsp(addedAspId) {
  addedId.value = addedAspId;
}

const defineStatusColor = (status) => {
  if (status.toLowerCase() === 'processed') {
    return 'bg-amber-500';
  } else if (status.toLowerCase() === 'done') {
    return 'bg-green-500';
  } else {
    return 'bg-blue-500';
  }
};

const defineFilter = (status) => {
  filter.value = status;
};

definePageMeta({
  layout: 'user',
  middleware: ['admin'],
});
</script>

<template>
  <div class="flex flex-col md:flex-row mt-8">
    <div class="md:w-2/5 items-start min-w-[300px] mx-2 lg:mx-0">
      <FormAspirasiUser @emit-added-asp-id="handleAddAsp" />
    </div>
    <div class="md:w-3/5 mt-16 md:mt-0">
      <div class="flex flex-col gap-6 justify-between">
        <div class="flex justify-between w-[90%] mt-16 md:mt-0">
          <div class="relative lg:w-[55%] w-[40%]">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon
                name="ic:round-search"
                size="20"
                class="text-gray-500"
              />
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

          <div>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="filter"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Filter
              <Icon
                name="ri:arrow-down-s-fill"
                size="20"
              />
            </button>
            <div
              id="filter"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm right-10 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li
                  class="block px-4 py-2 text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <button @click="defineFilter('diajukan')">Diajukan</button>
                </li>
                <li
                  class="block px-4 py-2 text-amber-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <button @click="defineFilter('diproses')">Diproses</button>
                </li>
                <li
                  class="block px-4 py-2 text-green-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <button @click="defineFilter('diterima')">Diterima</button>
                </li>
                <li
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <button @click="defineFilter('')">Semua status</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-6">
          <div
            v-for="aspiration of aspirations.data"
            :key="aspiration.id"
            class="w-[350px] p-6 border border-solid border-gray-300 rounded-[12px]"
          >
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
                class="px-2 py-1 text-sm font-medium text-center text-white rounded"
                :class="defineStatusColor(aspiration.status)"
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
        v-if="aspList.data.data.total > 0"
        class="flex items-center justify-between pt-4 lg:w-[95%] mx-auto w-[80%]"
        aria-label="Table navigation"
      >
        <div>
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
            >Menampilkan
            <span class="font-semibold text-gray-900 dark:text-white">
              {{ `1-${aspList.data.data.length}` }}
            </span>
            dari
            <span class="font-semibold text-gray-900 dark:text-white">
              {{ aspList.data.total }}
            </span>
          </span>
        </div>
        <div v-if="aspList.data.total > pageSize">
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
                  v-if="page < aspList.data.total_page"
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
                  @click="page = aspList.data.total_page"
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
  <div
    v-if="openModalDetail"
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
  >
    <div
      class="bg-black opacity-50 fixed top-0 left-0 right-0 z-50 items-center justify-center w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    ></div>
    <div class="relative z-50 w-80% h-full p-4 md:h-auto">
      <div
        class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
      >
        <button
          @click="openModalDetail = false"
          type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon
            name="heroicons-solid:x"
            size="1rem"
          />
          <span class="sr-only">Close modal</span>
        </button>
        <div class="flex">
          <div class="w-[400px]">
            <el-carousel
              :interval="5000"
              arrow="always"
              height="500px"
            >
              <div>
                <div
                  v-if="dataModal.images.length <= 0"
                  class="flex justify-center items-center h-[500px] w-full bg-slate-500 flex-col"
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
                <el-carousel-item
                  v-else
                  v-for="image of dataModal.images"
                  :key="image.id"
                  class="bg-slate-500 rounded overflow-hidden"
                >
                  <img
                    :src="image.url"
                    class="object-cover object-center h-full w-full"
                  />
                </el-carousel-item>
              </div>
            </el-carousel>
          </div>
          <div class="w-[600px] mx-8">
            <h1 class="text-3xl font-semibold text-center mb-8">
              {{ dataModal.judul }}
            </h1>
            <div class="flex justify-between my-2">
              <h2 class="text-lg font-medium">
                Pembuat: {{ dataModal.nama }}, {{ dataModal.tanggal }}
              </h2>
              <span class="py-2 px-4 bg-blue-500 rounded-sm text-white">{{
                dataModal.status
              }}</span>
            </div>
            <div class="text-start">
              <p class="text-lg font-medium mb-1">Deskripsi</p>
              <p class="text-gray-800">{{ dataModal.deskripsi }}</p>
            </div>
            <div class="text-start mt-4">
              <p class="text-lg font-medium mb-1">Lokasi</p>
              <p class="text-gray-800">{{ dataModal.lokasi }}</p>
            </div>
            <div
              v-if="dataModal.komentar"
              class="text-start mt-4"
            >
              <p class="text-lg font-medium mb-1">Komentar</p>
              <p class="text-gray-800">{{ dataModal.komentar }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
