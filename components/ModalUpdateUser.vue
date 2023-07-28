<template>
  <!-- Modal toggle -->
  <div class="flex justify-center m-5">
    <button id="updateProductButton" class="w-6 h-6" data-modal-toggle="updateProductModal" type="button">
      <Icon class="w-full h-full text-lg rounded text-amber-500 hover:bg-amber-900 hover:text-amber-200"
        name="material-symbols:edit-outline-rounded" />
    </button>
  </div>

  <!-- Main modal -->
  <div id="updateProductModal" tabindex="-1" aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl p-4 md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <!-- Modal header -->
        <div class="flex items-center justify-between pb-4 mb-4 border-b rounded-t sm:mb-5 dark:border-gray-600">
          <h3 class="text-lg font-semibold text-gray-900 xl:text-2xl xl:font-bold dark:text-white">
            Ubah User
          </h3>
          <button type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="updateProductModal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form action="POST" @submit.prevent="handleSubmit">
          <div class="flex flex-col gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                Lengkap</label>
              <input type="text" name="fullname" id="fullname"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contoh: John Doe" required="" pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
                title="Nama tidak sesuai format." />
            </div>
            <div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" v-model="email" name="email" id="email" :class="InputClass"
                  placeholder="mail@example.com" @focus="clearInputError" :required="isRequiredInput" />
              </div>
              <p v-if="submitted && emailError" class="text-sm text-red-600 dark:text-red-400">
                {{ emailError }}
              </p>
            </div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
              <input type="text" name="address" id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jl. Melon Runtuh No.12" required="" />
            </div>
            <div>
              <label for="nik" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIK</label>
              <input type="text" name="nik" id="nik"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="321XXXXXXXXXXXXX" required="" pattern="\d{16}"
                title="Hanya boleh terdiri dari 16 digit angka." />
            </div>
            <div>
              <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
              <select id="role"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option selected="">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button type="submit" @click="handleSubmit"
              class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">
              Update product
            </button>
            <button type="button"
              class="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
              data-modal-toggle="updateProductModal">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modal: {
    type: String
  }
})
import {initFlowbite} from "flowbite";

onMounted(() => {
  initFlowbite();
});

const email = ref("");
const emailError = ref("");
const submitted = ref(false);
const isRequiredInput = ref(true);

const clearInputError = () => {
  emailError.value = "";
};

const handleSubmit = () => {
  submitted.value = true;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email.value)) {
    emailError.value = "Format email tidak sesuai.";
  }

  if (email.value === "") {
    emailError.value = "Data tidak boleh kosong.";
  }
};
const InputClass = computed(() => {
  if (submitted.value && emailError.value) {
    return "bg-gray-50 border border-red-500 text-red-600 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  } else {
    return "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  }
});
</script>

<style scoped>
label:has(+ input[required])::after {
  content: "*";
  color: red;
}
</style>
