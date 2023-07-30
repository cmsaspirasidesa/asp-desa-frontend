<script setup>
import * as jose from "jose";
const headers = useRequestHeaders(["cookie"]);
const { data: token } = await useFetch("/api/token", { headers });
const { signOut } = useAuth();
const dataToken = jose.decodeJwt(token.value.jwt);

onBeforeMount(() => {
  if (dataToken.exp < Date.now() / 1000) {
    signOut();
  }
});
const listAspirations = ref([]);

async function getUserAspirations() {
  const { data } = await useFetch("http://localhost:8000/useraspirations/", {
    method: "GET",
    headers: {
      Authorization: token.value.jwt,
    },
  });
  listAspirations.value = data.value.data;
}

onMounted(async () => {
  setTimeout(() => {
    getUserAspirations();
  }, 100);
});

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
      <FormSearch
        class="lg:w-[95%] mx-auto w-[80%]"
        :aspirationSearch="listAspirations"
      />
    </div>
  </div>
</template>
