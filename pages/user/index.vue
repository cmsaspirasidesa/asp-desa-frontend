<script setup>
import Masjid from '../../assets/image/Masjid1.jpg'
import Masjid2 from '../../assets/image/Masjid2.jpg'
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
]

definePageMeta({
  layout: 'user',
  middleware: ['admin'],
})
</script>

<template>
  <div class="flex flex-col max-w-screen-xl gap-8 md:flex-row lg:mx-8">
    <FormAspirasi />
    <div>
      <FormSeacrh />
      <NuxtLink to="/detail_aspirasi" class="flex flex-wrap my-6 gap-y-6">
        <CardAspirasi v-for="item of aspirasi" :aspirasi="item" :key="item.id" />
      </NuxtLink>
    </div>
  </div>
</template>
