<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/user',
  }
});
</script>

<template>
  <div>
    <section id="home-section" class="top-0 bg-slate-200 dark:bg-gray-900">
      <div class="flex justify-around max-w-screen-xl px-4 py-4 mx-auto lg:gap-0 xl:gap-0">
        <div class="w-full lg:max-w-2xl">
          <FormAspirasi />
        </div>
        <div class="hidden lg:flex lg:flex-col">
          <GuestRegisCard />
        </div>
      </div>
    </section>

    <section id="aspirasi-section" class="bg-gray-50 dark:bg-gray-800">
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-4">
          <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Daftar Aspirasi
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Ut bibendum viverra iaculis. Integer malesuada a nulla ac egestas.
            Nulla et elit dignissim, egestas dolor et, eleifend orci.
          </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          <NuxtLink>
            <GuestAspCard />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Lorem ipsum dolor
            <span class="font-extrabold">200,000+</span> laoreet vehicula
          </h2>
          <p class="mb-4 font-light">
            Vestibulum consectetur lacinia eleifend. Nulla eget nisl
            condimentum, malesuada orci ut, rutrum elit. Praesent tincidunt
            sodales velit ut pretium. Nunc eget enim at sem congue egestas non
            sed sapien. Mauris lobortis sollicitudin orci sed pellentesque.
            Vestibulum pharetra urna eu orci tempor ornare. Nullam laoreet
            lacinia purus, sit amet lacinia tortor suscipit at. Cras id
            vestibulum velit, eu tincidunt massa.
          </p>
          <p class="mb-4 font-medium">
            Ut bibendum viverra iaculis. Integer malesuada a nulla ac egestas.
            Nulla et elit dignissim, egestas dolor et, eleifend orci. Mauris
            convallis lobortis risus, a vehicula odio bibendum non.
          </p>
          <NuxtLink to="/"
            class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
            Learn more
            <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
