<template>
  <div class="flex flex-col items-center md:flex-col xl:flex-row">
    <Carousel />
    <DetailAspirasiContent />
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<style></style>
