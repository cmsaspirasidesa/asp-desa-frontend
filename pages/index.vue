<script setup>
const listAspirations = ref([]);

const listAspirations = ref(null);

async function fetchData() {
  try {
    const {data, error} = await useFetch(
      "http://localhost:8000/aspirations",
      {
        method: "GET",
      }
    );

    listAspirations.value = data.value.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
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

    <section id="aspirasi-section" class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-4">
          <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Daftar Aspirasi
          </h2>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          <GuestAspCard v-for="item of listAspirations" :listAspirations="item" :key="item.id" />
        </div>
      </div>
    </section>

    
  </div>
</template>
