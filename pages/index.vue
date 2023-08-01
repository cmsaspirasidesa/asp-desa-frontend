<script setup>
const aspirations = ref([]);
const page = ref(1);
const pageSize = ref(9);
const query = ref('');
const addedId = ref('');

const { data: aspList } = await useFetch(
  () =>
    `http://localhost:8000/aspirations?page=${page.value}&limit=${pageSize.value}&search=${query.value}`,
  {
    method: 'GET',
    key: `asplist-${page.value}`,
    watch: [page, query, addedId],
  }
);

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

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/user',
  },
});
</script>

<template>
  <section id="home-section" class="top-0 bg-slate-200 dark:bg-gray-900">
    <div class="flex justify-around max-w-screen-xl px-4 py-4 mx-auto lg:gap-0 xl:gap-0">
      <div v-if="aspList.data" class="w-full lg:max-w-2xl">
        <FormAspirasi @emit-added-asp-id="handleAddAsp" />
      </div>
      <div class="hidden lg:flex lg:flex-col">
        <GuestRegisCard />
      </div>
    </div>
  </section>

  <section id="aspirasi-section" class="bg-gray-50 py-4">
    <h2 class="mb-4 text-4xl font-extrabold text-gray-900 text-center">
      Daftar Aspirasi
    </h2>
    <div class="flex items-center justify-center pb-3">
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon name="ic:round-search" size="20" class="text-gray-500" />
        </div>
        <input v-model="query" @input="() => (page = 1)" type="text" id="table-search"
          class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-[350px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cari judul aspirasi, email atau nama user" />
      </div>
    </div>
    <div class="flex gap-10 justify-center flex-wrap">
      <div v-for="(aspiration, index) of aspirations.data" :key="aspiration.id"
        class="w-[350px] p-6 border border-solid border-gray-300 rounded-[12px]">
        <div class="group">
          <div class="overflow-hidden rounded-md group-hover:opacity-75 h-[300px] bg-slate-400">
            <div v-if="aspiration.Images.length <= 0" class="flex justify-center items-center h-full w-full flex-col">
              <Icon name="heroicons-solid:photo" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
              <p class="text-2xl text-center font-semibold text-gray-300 mt-2">
                No Image
              </p>
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
            <p class="px-2 py-1 text-sm text-center text-white font-bold border border-gray-300 border-solid rounded-md"
              :class="defineStatusColor(aspiration.status)">
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
    <div v-if="aspList.data.data.length === 0"
      class="flex flex-col items-center py-32 mx-32 rounded-lg bg-gray-200 text-gray-500 justify-center">
      <Icon name="mdi:note-off" size="50" />
      <p class="text-4xl">Data Aspirasi tidak ditemukan</p>
    </div>
    <nav v-if="aspList.data.total" class="flex flex-col items-center justify-center py-4 px-12 gap-4"
      aria-label="Table navigation">
      <div v-if="aspList.data.total > pageSize">
        <nav aria-label="pagination">
          <ul class="flex items-center -space-x-px h-8 text-sm">
            <li>
              <button @click="page = 1"
                class="flex items-center justify-center px-2 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="hover:text-cyan-500">Awal</span>
              </button>
            </li>
            <li>
              <button v-if="page > 1" @click="page--"
                class="flex items-center justify-center px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <Icon name="ic:baseline-arrow-left" size="25" class="hover:text-cyan-500" />
              </button>
            </li>
            <li>
              <span aria-current="page"
                class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                {{ page }}
              </span>
            </li>
            <li>
              <button v-if="page < aspList.data.total_page" @click="page++"
                class="flex items-center justify-center px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <Icon name="ic:baseline-arrow-right" size="25" class="hover:text-cyan-500" />
              </button>
            </li>
            <li>
              <button @click="page = aspList.data.total_page"
                class="flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="hover:text-cyan-500">Akhir</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <span class="text-md font-normal text-gray-500 dark:text-gray-400">Menampilkan
          <span class="font-semibold text-gray-900 dark:text-white">
            {{ `1-${aspList.data.data.length}` }}
          </span>
          dari
          <span class="font-semibold text-gray-900 dark:text-white">
            {{ aspList.data.total }}
          </span>
        </span>
      </div>
    </nav>
  </section>
</template>
