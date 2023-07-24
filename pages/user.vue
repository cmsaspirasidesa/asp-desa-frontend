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
  <NavbarUser />
  <div class="flex flex-col gap-8 md:flex-row lg:mx-8">
    <FormAspirasi />
    <div>
      <FormSeacrh />
      <div class="flex flex-wrap mt-6 gap-y-6">
        <CardAspirasi v-for="item of aspirasi" :aspirasi="item" :key="item.id" />
      </div>
    </div>
  </div>
</template>