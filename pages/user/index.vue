<script setup>
const listAspirations = ref(null);
const loading = ref(true);

const headers = useRequestHeaders(["cookie"]);
const { data: token } = await useFetch("/api/token", { headers });
const access = token.value;

console.log(access);

onMounted(async () => {
  try {
    const { data, error } = await useFetch(
      `http://localhost:6969/aspirations/${access.id}`,
      {
        method: "GET",
      }
    );

    if (data && data.value && data.value.data && data.value.data.length > 0) {
      listAspirations.value = data.value.data;
    } else {
      console.error("No data found");
    }

    loading.value = false;
  } catch (error) {
    console.error("Error fetching data:", error);
    loading.value = false;
  }
});

definePageMeta({
  layout: "user",
  middleware: ["admin"],
});
</script>

<template>
  <div class="flex flex-col max-w-screen-xl gap-8 md:flex-row lg:mx-8">
    <FormAspirasi @user-adds-asp="handleUserAddsAsp" />
    <div>
      <FormSeacrh />
      <NuxtLink to="/detail-aspirasi" class="flex flex-wrap my-6 gap-y-6">
        <CardAspirasi
          v-for="item in listAspirations"
          :listAspirations="item"
          :key="item.id"
        />
      </NuxtLink>
    </div>
  </div>
</template>
