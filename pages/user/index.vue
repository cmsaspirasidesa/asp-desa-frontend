<script setup>
import Masjid from '../../assets/image/Masjid1.jpg';
import Masjid2 from '../../assets/image/Masjid2.jpg';
const aspirations = [
  {
    id: 1,
    subject: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    description:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    subject: 'Bangun Masjid',
    imageSrc: Masjid2,
    status: 'Proses',
    description:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    subject: 'Bangun Masjid',
    imageSrc: Masjid,
    status: 'Proses',
    description:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
  {
    id: 1,
    subject: 'Bangun Masjid',
    imageSrc: Masjid2,
    status: 'Proses',
    description:
      'lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe',
  },
];

definePageMeta({
  layout: 'user',
  middleware: ['admin']
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
