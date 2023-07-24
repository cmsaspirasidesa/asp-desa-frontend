<script setup>
import Masjid from '../assets/image/Masjid1.jpg'
const aspirasi = [
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    deskripsi: 'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    deskripsi: 'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    deskripsi: 'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    deskripsi: 'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
]
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 lg:mx-8">
    <FormAspirasi />
    <div>
      <FormSeacrh />
      <div class="flex gap-y-6 mt-6 flex-wrap">
        <CardAspirasi v-for="item of aspirasi" :aspirasi="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>