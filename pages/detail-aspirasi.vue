<script setup>
definePageMeta({
  layout: "user",
});
</script>

<template>
  <div class="flex flex-col items-center md:flex-col xl:flex-row">
    <NuxtLink to="/user" class="flex flex-wrap my-6 gap-y-6">
      <BackButton class="absolute top-16 left-2" />
    </NuxtLink>
    <Carousel />
    <DetailAspirasiContent />
  </div>
</template>
