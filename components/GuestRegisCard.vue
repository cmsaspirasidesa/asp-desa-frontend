<template>
  <div
    class="bg-white bg-opacity-50 dark:bg-gray-900 rounded-2xl lg:px-5 md:px-5 mx-10 max-w-md"
  >
    <div class="py-3 px-4 mx-auto">
      <h2 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white text-center">Desa</h2>
      <p class="mb-6 text-xl">
        Disini warga Bisa memberikan aspirasi demi kemajuan desa kita semua,
        dengan semua aspirasi anda desa ini akan memberikan pelayanan terbaik
        bagi semua warga
      </p>
      <div class="flex flex-wrap items-center justify-center w-full">
        <p class="mb-2 font-bold text-center text-xl w-full">Belum punya akun?</p>
        <NuxtLink
          to="/register"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-800 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Daftar
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
