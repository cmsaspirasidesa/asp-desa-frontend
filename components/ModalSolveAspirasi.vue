<template>
  <!-- Modal toggle -->
  <div class="flex justify-center m-5">
    <button
      id="deleteButton"
      data-modal-toggle="deleteModal"
      class="block text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-700"
      type="button"
    >
      <div class="flex items-center justify-center gap-2">
        <span class="font-medium">Setujui</span>
        <Icon name="heroicons-solid:check-circle" size="1.5rem" />
      </div>
    </button>
  </div>

  <!-- Main modal -->
  <div
    id="deleteModal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div
        class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5"
      >
        <button
          type="button"
          class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="deleteModal"
        >
          <Icon name="heroicons-solid:x" size="1rem" />
          <span class="sr-only">Close modal</span>
        </button>

        <h3 class="text-lg mb-4 font-semibold">Proses Aspirasi</h3>
        <p class="mb-5 text-gray-500 dark:text-gray-300">
          Apakah anda ingin menyelasaikan aspirasi ini?
        </p>
        <form action="#">
          <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div class="sm:col-span-2">
              <label
                for="comment"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
                >Komentar</label
              >
              <textarea
                id="comment"
                rows="5"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                placeholder="Ketik komentar..."
              ></textarea>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              type="submit"
              class="text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800"
            >
              Kirim
            </button>
            <button
              data-modal-toggle="deleteModal"
              type="button"
              class="py-2.5 px-5 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
