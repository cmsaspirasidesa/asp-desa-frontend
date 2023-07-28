<template>
  <!-- Modal toggle -->
  <div class="flex items-center">
    <button id="deleteButton" class="w-6 h-6" data-modal-toggle="deleteModal" type="button">
      <Icon class="w-full h-full text-lg text-red-500 rounded hover:bg-red-900 hover:text-red-200"
        name="ic:twotone-delete-forever" />
    </button>
  </div>

  <!-- Main modal -->
  <div id="deleteModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md p-4 md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <button type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal">
          <Icon name="heroicons-solid:x" size="1rem" />
          <span class="sr-only">Close modal</span>
        </button>
        <p class="mb-4 text-gray-500 dark:text-gray-300">
          Apakah anda yakin untuk menghapus user?
        </p>
        <div class="flex items-center justify-center space-x-4">
          <button data-modal-toggle="deleteModal" type="button"
            class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            Batal
          </button>
          <button type="submit"
            class="px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
