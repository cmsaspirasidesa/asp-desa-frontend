<script setup>
const {data, signOut} = useAuth();
import desa from '../assets/image/Desa.png';
</script>

<template>
  <header class="sticky top-0 z-50 shadow-md">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div class="flex justify-start items-center">
          <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <Icon name="ic:baseline-menu" size="25" />
            <span class="sr-only">Toggle sidebar</span>
          </button>
          <nuxt-link to="/" class="flex items-center justify-between mr-4">
            <img :src="desa" class="mr-3 h-8" alt="Logo Desa" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Aspirasi Desa</span>
          </nuxt-link>
        </div>
        <div class="flex items-center lg:order-2">
          <button type="button"
            class="flex mx-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
            <span class="sr-only">Open user menu</span>
            <Icon name="ic:baseline-account-circle" class="text-gray-500" size="25" />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden w-56 my-4 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
            id="dropdown">
            <div class="px-4 py-3">
              <span class="block text-sm font-semibold text-gray-900 dark:text-white">{{ data.user.name }}</span>
              <span class="block text-sm text-gray-900 truncate dark:text-white">{{ data.user.email }}</span>
            </div>
            <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
              <li>
                <a href="#"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Profil</a>
              </li>
            </ul>
            <ul class="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
              <li @click="signOut()"
                class="flex items-center gap-1 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                <p>Keluar</p>
                <Icon name="ic:outline-logout" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
