<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['user'],
});
import * as jose from 'jose';
const headers = useRequestHeaders(['cookie']);
const {data: token} = await useFetch('/api/token', {headers});
const {signOut} = useAuth();
const dataToken = jose.decodeJwt(token.value.jwt);

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut();
  }
});

const page = ref(1);
const pageSize = ref(10);
const query = ref('');
const updatedId = ref('');

const {data: userList} = await useFetch(
  () =>
    `http://localhost:8000/users?page[size]=${pageSize.value}&page[number]=${page.value}&search=${query.value}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token.value.jwt,
    },
    key: `userlist-${page.value}`,
    watch: [page, query, updatedId],
  }
);

function handleUser(updatedUserId) {
  updatedId.value = updatedUserId
}
</script>

<template>
  <main class="flex flex-col h-auto p-4 md:ml-64">
    <div>
      <h1 class="mb-8 text-2xl font-bold">Manajemen User</h1>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex items-center justify-between pb-3 m-1">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name="ic:round-search" size="20" class="text-gray-500" />
          </div>
          <input v-model="query" @input="() => page = 1" type="text" id="table-search"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari nama, nik, alamat, atau email" />
        </div>
      </div>
      <div>
        <UserTable
          v-if="!pending"
          :users="userList.data"
          @emit-updated-user-id="handleUser"
        />
        <NuxtLoadingIndicator v-if="pending"/> 
      </div>
    </div>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
      <div>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Menampilkan
          <span class="font-semibold text-gray-900 dark:text-white">
            {{ `1-${userList.data.length}` }}
          </span>
          dari
          <span class="font-semibold text-gray-900 dark:text-white">
            {{ userList.total }}
          </span>
        </span>
      </div>
      <div v-if="userList.total > pageSize">
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
              <button v-if="page < userList.total_pages" @click="page++"
                class="flex items-center justify-center px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <Icon name="ic:baseline-arrow-right" size="25" class="hover:text-cyan-500" />
              </button>
            </li>
            <li>
              <button @click="page = userList.total_pages"
                class="flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="hover:text-cyan-500">Akhir</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  </main>
</template>
