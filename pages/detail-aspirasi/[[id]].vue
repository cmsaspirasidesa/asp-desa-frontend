<script setup>
const listAspirations = reactive({});
const aspirationId = ref("");

const headers = useRequestHeaders(["cookie"]);
const {data: token} = await useFetch("/api/token", {headers});
const jwtToken = token.value.jwt;

const route = useRoute();

async function fetchData() {
  try {
    // const url = `http://localhost:6969/aspirations/${aspirationId}`;
    const url = `http://localhost:6969/aspirations/${route.params.id}`;
    const {data, error} = await useFetch(url, {
      method: "GET",
      headers: {
        Authorization: jwtToken,
      },
    });

    listAspirations.value = data.value.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  await fetchData();
});

definePageMeta({
  layout: "user",
});
</script>

<template>
  <div>
    <div class="relative flex flex-col items-center md:flex-col xl:flex-row">
      <NuxtLink to="/user" class="flex flex-wrap my-6 gap-y-6">
        <BackButton class="absolute top-16 left-2" />
      </NuxtLink>
      <DetailAspirasiContent v-for="aspirasi of listAspirations" :contentAspiration="aspirasi" />
    </div>
  </div>
</template>
