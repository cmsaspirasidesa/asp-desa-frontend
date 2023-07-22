<script setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div>
    <section
      id="home-section"
      class="bg-slate-100 top-0 dark:bg-gray-900"
    >
      <div
        class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="place-self-center mr-auto lg:col-span-7">
          <h1
            class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white"
          >
            Payments tool for software companies
          </h1>
          <p
            class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
          >
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <NuxtLink
            to="#"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </NuxtLink>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>

    <section
      id="aspirasi-section"
      class="bg-gray-50 dark:bg-gray-800"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="mb-8 max-w-screen-md lg:mb-16">
          <h2
            class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Designed for business teams like yours
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div
          class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0"
        >
          <GuestAspCard />
        </div>
      </div>
    </section>

    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div
          class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400"
        >
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
          <NuxtLink
            to="/"
            class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Learn more
            <svg
              class="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
