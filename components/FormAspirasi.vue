<script setup>
import {PhotoIcon} from '@heroicons/vue/24/solid'
</script>

<template>
  <form
    class="md:max-w-[400px] max-w-[350px] w-full m-auto md:mt-10 flex flex-col px-2 py-5 sm:p-10 rounded-[12px] md:border md:border-solid md:border-gray-300">
    <div>
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
      <div class="mt-2">
        <input type="text" required="true" name="street-address" id="street-address" autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <div class="mt-2">
        <input type="email" required="true" name="street-address" id="street-address" autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="street-address" required="true" class="block text-sm font-medium leading-6 text-gray-900">Judul</label>
      <div class="mt-2">
        <input type="text" name="street-address" id="street-address" autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="street-address" required="true" class="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
      <div class="mt-2">
        <input type="text" name="street-address" id="street-address" autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
      <div class="mt-2">
        <textarea id="about" name="about" rows="5"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div class="mt-6">
      <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Foto</label>
      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div class="text-center">
          <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div class="mt-4 flex text-sm leading-6 text-gray-600">
            <label for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only" />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kirim</button>
    </div>
  </form>
</template>