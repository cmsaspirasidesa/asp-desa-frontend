<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl min-w-full lg:px-10 md:px-5 mx-10">
    <div class="py-3 px-4 mx-auto max-w-2xl">
      <h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        Form Aspirasi
      </h2>
      <form action="#">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-1">
          <div class="lg:col-span-1 md:col-span-2 sm:col-span-2">
            <label
              for="name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Nama</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Masukkan nama Anda"
              required="true"
            />
          </div>
          <div class="lg:col-span-1 md:col-span-2 sm:col-span-2">
            <label
              for="name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Masukkan email anda"
              required="true"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Alamat</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Masukkan alamat anda"
              required="true"
            />
          </div>
          <div class="md:col-span-2 sm:col-span-2">
            <label
              for="name"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Judul Aspirasi</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Masukkan judul aspirasi"
              required="true"
            />
          </div>
          <div class="md:col-span-2 sm:col-span-2">
            <label
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              for="file_input"
              >Upload file</label
            >
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="description"
              class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
              >Description</label
            >
            <textarea
              id="description"
              rows="3"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Masukkan deskripsi aspirasi"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center sm:col-span-2">
          <button
            type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-800 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Tambah Aspirasi
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
