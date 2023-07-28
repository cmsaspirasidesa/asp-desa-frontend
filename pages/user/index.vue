<script setup>
const listAspirations = ref(null);

const headers = useRequestHeaders(["cookie"]);
const {data: token} = await useFetch("/api/token", {headers});
const jwtToken = token.value.jwt;

async function fetchData() {
  try {
    const url = `http://localhost:6969/useraspirations/`;
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
  middleware: ['admin'],
});
</script>

<template>
  <div class="flex flex-col max-w-screen-xl gap-8 md:flex-row lg:mx-8">
    <FormAspirasi @user-adds-asp="handleUserAddsAsp" />
    <div>
      <FormSearch />
      <div class="flex flex-wrap my-6 gap-y-6">
        <CardAspirasi v-for="(aspiration, index) of listAspirations" :key="aspiration.id"
          :aspirationUser="listAspirations[index]" :aspirationId="listAspirations[index].id" />
      </div>
    </div>
  </div>
</template>
