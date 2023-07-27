<script setup>
import Masjid from '../../assets/image/Masjid1.jpg';
import Masjid2 from '../../assets/image/Masjid2.jpg';
const aspirasi = [
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    deskripsi:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid2,
    status: 'Proses',
    deskripsi:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    deskripsi:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    judul: 'Bangun Masjid',
    imageSrc: Masjid2,
    status: 'Proses',
    deskripsi:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
];

definePageMeta({
  layout: 'user',
});
</script>

<template>
  <div class="flex max-w-screen-xl gap-2 md:flex-row lg:mx-8 mt-4">
    <div class="w-full">
      <FormAspirasiUser />
    </div>
    <div class="w-full">
      <FormSearch />
      <div class="mt-3 flex flex-wrap w-full">
        <CardAspirasi
          v-for="item of aspirasi"
          :aspirasi="item"
          :key="item.id"
        />
      </div>
    </div>
  </div>
</template>
