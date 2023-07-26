<script setup>
import Masjid from "../../assets/image/Masjid1.jpg";
import Masjid2 from "../../assets/image/Masjid2.jpg";
const aspirasi = [
  {
    id: 1,
    judul: "Bangun Masjid",
    imageSrc: Masjid,
    status: "Proses",
    deskripsi:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
  {
    id: 1,
    judul: "Bangun Masjid",
    imageSrc: Masjid2,
    status: "Proses",
    deskripsi:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
  {
    id: 1,
    judul: "Bangun Masjid",
    imageSrc: Masjid,
    status: "Proses",
    deskripsi:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
  {
    id: 1,
    judul: "Bangun Masjid",
    imageSrc: Masjid2,
    status: "Proses",
    deskripsi:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
];

definePageMeta({
  layout: "user",
});
</script>

<template>
  <div
    class="flex flex-col max-w-screen-xl lg:flex-col xl:flex-row gap-8 md:flex-col lg:mx-12 xl:mx-16 mt-5"
  >
    <FormAspirasiUser />
    <div>
      <FormSeacrh />
      <NuxtLink to="/detail-aspirasi" class="flex flex-wrap my-6 gap-y-6">
        <CardAspirasi
          v-for="item of aspirasi"
          :aspirasi="item"
          :key="item.id"
        />
      </NuxtLink>
    </div>
  </div>
</template>
