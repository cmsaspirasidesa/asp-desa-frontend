<script setup>
import { ref, computed, watch } from "vue";
const props = defineProps({
  aspirationSearch: {
    type: Array,
    default: () => [],
  },
});
const search = ref("");
const showResults = ref(false);

const filteredAspirations = computed(() => {
  const query = search.value.trim().toLowerCase();
  if (!query) return props.aspirationSearch;
  return props.aspirationSearch.filter((aspiration) =>
    aspiration.judul.toLowerCase().includes(query)
  );
});

watch(search, () => {
  showResults.value = false;
});

function submit() {
  if (search.value.trim() !== "") {
    console.log("Search Query:", search.value);
    showResults.value = true;
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <div class="relative w-full flex flex-row">
        <input
          type="search"
          id="search-dropdown"
          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-gray-300 focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-500"
          placeholder="Cari Aspirasi ..."
          v-model="search"
        />
        <button
          type="submit"
          class="py-3 px-4 lg:px-6 text-sm font-medium h-full text-gray-500 rounded-r-lg bg-indigo-600"
          :disabled="search === ''"
        >
          <Icon
            name="heroicons:magnifying-glass-solid"
            size="20px"
            class="text-white text-bold"
          />
        </button>
      </div>
    </form>

    <div v-if="showResults && filteredAspirations.length > 0">
      <div v-for="aspiration in filteredAspirations" :key="aspiration.id">
        <div class="flex flex-wrap mt-8 gap-6 justify-center">
          <div
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
                  <h3
                    class="mr-2 text-lg font-medium text-gray-700 line-clamp-1"
                  >
                    {{ aspiration.judul }}
                  </h3>
                </div>
                <p
                  class="px-2 py-1 text-sm font-medium text-center text-gray-900 border border-gray-300 border-solid rounded-md"
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
      </div>
    </div>
    <div v-else-if="showResults">
      <p>Tidak ada aspirasi yang ditemukan.</p>
    </div>

    <div class="flex flex-wrap mt-8 gap-6 justify-center" v-else>
      <div
        v-for="aspiration of aspirationSearch"
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
              <p class="text-2xl text-center font-semibold text-gray-300 mt-2">
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
              class="px-2 py-1 text-sm font-medium text-center text-gray-900 border border-gray-300 border-solid rounded-md"
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
  </div>
</template>
