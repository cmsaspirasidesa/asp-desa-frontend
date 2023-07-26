<script setup>
import Masjid from "../../assets/image/Masjid1.jpg";
import Masjid2 from "../../assets/image/Masjid2.jpg";
const aspirations = [
  {
    id: 1,
    subject: "Bangun Masjid",
    imageSrc: Masjid,
    status: "Proses",
    description:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
  {
    id: 1,
    subject: "Bangun Masjid",
    imageSrc: Masjid2,
    status: "Proses",
    description:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
  {
    id: 1,
    subject: "Bangun Masjid",
    imageSrc: Masjid,
    status: "Proses",
    description:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
  {
    id: 1,
    subject: "Bangun Masjid",
    imageSrc: Masjid2,
    status: "Proses",
    description:
      "lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe lorem ipsum dolor smit are nawa kombe",
  },
];

const { data } = useAuth();

const handleUserAddsAsp = async (formAddData) => {
  await useFetch("http://localhost:6969/aspirations", {
    method: "POST",
    headers: {
      authorization: data.token.jwt,
      "Content-Type": "multipart/form-data",
    },
    body: {
      subject: formAddData.title,
      deskripsi: formAddData.description,
      lokasi: formAddData.aspLocation,
      images: descriptionormAddData.formImages,
    },
  });
};

definePageMeta({
  layout: "user",
});
</script>

<template>
  <div class="flex flex-col max-w-screen-xl gap-8 md:flex-row lg:mx-8">
    <FormAspirasi @user-adds-asp="handleUserAddsAsp" />
    <div>
      <FormSeacrh />
      <NuxtLink to="/detail-aspirasi" class="flex flex-wrap my-6 gap-y-6">
        <CardAspirasi
          v-for="item of aspirations"
          :aspirations="item"
          :key="item.id"
        />
      </NuxtLink>
    </div>
  </div>
</template>
