<script setup>
definePageMeta({
  layout: 'admin',
  middleware: ['user'],
});
import * as jose from 'jose'
const headers = useRequestHeaders(['cookie']);
const {data: token} = await useFetch('/api/token', {headers});
const {signOut} = useAuth()
const dataToken = jose.decodeJwt(token.value.jwt)
const refreshData = ref(0)
const page = ref(1);
const pageSize = ref(10);
const search = ref('')

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut()
  }
})

import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
const open = ref(false)
const aspirationId = ref(null)
const aspirationStatus = ref(null)
const comment = ref(null)
function openModal(id, status) {
  aspirationId.value = id
  if (status === 'Processed') {
    aspirationStatus.value = 'Done'
  } else {
    aspirationStatus.value = 'Processed'
  }
  open.value = true
}

function closeModal() {
  comment.value = null
  aspirationId.value = null
  aspirationStatus.value = null
  open.value = false
}

const {data: listAspirations} = await useFetch(() => `http://localhost:8000/aspirations?page=${page.value}&limit=${pageSize.value}&search=${search.value}`, {
  method: 'GET',
  watch: [refreshData, page, search],
})

async function changeStatus() {
  if (comment.value) {
    await useFetch(`http://localhost:8000/aspirations/${aspirationId.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value.jwt,
      },
      body: {
        'status': aspirationStatus.value,
        'komentar': comment,
      },
    })
  } else {
    await useFetch(`http://localhost:8000/aspirations/${aspirationId.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': token.value.jwt,
      },
      body: {
        'status': aspirationStatus.value
      },
    })
  }
  comment.value = null
  aspirationId.value = null
  comment.value = null
  open.value = false
  refreshData.value++
}
</script>

<template>
  <main class="flex flex-col h-auto p-4 md:ml-64">
    <div>
      <h1 class="mb-8 text-2xl font-bold">Manajemen Aspirasi</h1>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="flex items-center justify-between pb-4">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon name="ic:round-search" size="20" class="text-gray-500" />
          </div>
          <input v-model="search" @input="() => page = 1" type="text" id="table-search"
            class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari nama, nik, atau email" />
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <span class="text-base text-center">No</span>
            </th>
            <th scope="col" class="px-6 py-3 text-base text-center">
              Nama User
            </th>
            <th scope="col" class="px-6 py-3 text-base text-center">
              Judul
            </th>
            <th scope="col" class="px-6 py-3 text-base text-center">
              Status
            </th>
            <th scope="col" class="px-6 py-3 text-base text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aspiration, index) of listAspirations.data.data"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4 m-auto">
              <span class="font-semibold text-black">{{ index + 1 }}</span>
            </td>
            <td class="px-6 py-4 text-lg">{{ aspiration.nama }}</td>
            <td class="px-6 py-4 text-lg">{{ aspiration.judul }}</td>
            <td v-if="aspiration.status === 'Submitted'" class="flex py-4">
              <p class="px-4 py-2 text-blue-500 uppercase border border-solid border-blue-500 w-[105px]">{{
                aspiration.status }}</p>
            </td>
            <td v-else-if="aspiration.status === 'Processed'" class="flex py-4">
              <p class="px-4 py-2 text-orange-500 uppercase border border-solid border-orange-500 w-[105px]">{{
                aspiration.status }}</p>
            </td>
            <td v-else class="flex py-4">
              <p class="px-4 py-2 uppercase text-green-500 border border-solid border-green-500 w-[105px] text-center">{{
                aspiration.status }}</p>
            </td>
            <td class="px-6 py-4">
              <button v-if="aspiration.status === 'Submitted'" type="button"
                class="py-2 px-4 w-[80px] bg-slate-500 text-white rounded-md text-center"
                @click="openModal(aspiration.id, aspiration.status)">Process</button>
              <button v-else-if="aspiration.status === 'Processed'" type="button"
                class="py-2 px-4 w-[80px] bg-slate-500 text-white text-center rounded-md"
                @click="openModal(aspiration.id, aspiration.status)">Done</button>
              <button v-else class="hidden"></button>
            </td>
          </tr>
        </tbody>
      </table>
      <TransitionRoot class="z-50" as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="closeModal">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
            leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div class="fixed inset-0 z-[60] overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild as="template" enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel
                  class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">

                      <div v-if="aspirationStatus === 'Done'" class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Ganti status
                        </DialogTitle>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">Apakah anda yakin mau mengganti status aspirasi menjadi done?
                          </p>
                        </div>
                        <div class="flex flex-col mt-4">
                          <label for="coment"
                            class="text-base font-semibold leading-6 text-gray-900 mb-1">Komentar</label>
                          <textarea type="text" v-model="comment" rows="4" name="coment" id="coment"
                            class="border-gray-500 rounded" />
                        </div>
                      </div>

                      <div v-else class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Ganti status
                        </DialogTitle>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">Apakah anda yakin mau mengganti status aspirasi menjadi
                            process?
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button"
                      class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                      @click="changeStatus">Oke</button>
                    <button type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      @click="closeModal" ref="cancelButtonRef">Batal</button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
    <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
      <div>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Menampilkan
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
              <button v-if="page < listAspirations.data.total_page" @click="page++"
                class="flex items-center justify-center px-1 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <Icon name="ic:baseline-arrow-right" size="25" class="hover:text-cyan-500" />
              </button>
            </li>
            <li>
              <button @click="page = listAspirations.data.total_page"
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
