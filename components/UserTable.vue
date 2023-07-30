<script setup>
const userData = defineProps({
  users: Object,
});

const isShowUpdateModal = ref(false);
const isShowDeleteModal = ref(false);

function showModal(user) {
  isShowUpdateModal.value = true;
  formData.value.userId = user.id;
  formData.value.nik = user.nik;
  formData.value.name = user.nama;
  formData.value.address = user.alamat;
  formData.value.email = user.email;
}

function closeModal() {
  isShowUpdateModal.value = false;
}

function showDeleteModal(userId) {
  isShowDeleteModal.value = true;
  formData.value.userId = userId;
}

function closeDeleteModal() {
  isShowDeleteModal.value = false;
}

const formData = ref({
  userId: '',
  name: '',
  email: '',
  address: '',
  nik: '',
});

const headers = useRequestHeaders(['cookie']);
const {data: token} = await useFetch('/api/token', {headers});
const accessToken = token.value;

const updateUser = async () => {
  try {
    const response = await useFetch(
      `http://localhost:8000/users/${formData.value.userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: accessToken.jwt,
        },
        body: {
          email: formData.value.email,
          alamat: formData.value.address,
        },
      }
    );

    isShowUpdateModal.value = false;
    console.log('server response: ', response);
  } catch (e) {
    isShowUpdateModal.value = false;
    console.log(e);
  }
};

const deleteUser = async () => {
  try {
    const response = await useFetch(
      `http://localhost:8000/users/${formData.value.userId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: accessToken.jwt,
        },
      }
    );

    isShowDeleteModal.value = false;
    console.log('server response: ', response);
  } catch (e) {
    isShowUpdateModal.value = false;
    console.log(e);
  }
};
</script>

<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <span class="text-lg">#</span>
          </th>
          <th scope="col" class="px-6 py-3">
            NIK
          </th>
          <th scope="col" class="px-6 py-3">
            Nama
          </th>
          <th scope="col" class="px-6 py-3">
            Alamat
          </th>
          <th scope="col" class="px-6 py-3">
            Email
          </th>
          <th scope="col" class="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="users" v-for="(user, index) of users" :key="user"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <span class="font-semibold text-black">{{ index + 1 }}</span>
          </td>
          <td class="px-6 py-4">{{ user.nik }}</td>
          <td class="px-6 py-4">{{ user.nama }}</td>
          <td class="px-6 py-4">{{ user.alamat }}</td>
          <td class="px-6 py-4">{{ user.email }}</td>
          <td class="box-border flex justify-center gap-1 py-4">
            <button @click="showModal(user)" type="button"
              class="hover:bg-amber-900 pb-1 px-1 rounded text-amber-500 hover:text-amber-200">
              <Icon class="text-lg" name="material-symbols:edit-outline-rounded" />
            </button>
            <button @click="showDeleteModal(user.id)" type="button"
              class="hover:bg-red-900 pb-1 px-1 rounded text-red-500 hover:text-red-200">
              <Icon class="text-lg" name="ic:twotone-delete-forever" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="isShowUpdateModal"
      class="fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div
        class="bg-black opacity-50 fixed z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      </div>
      <div class="relative z-50 w-full h-full max-w-2xl p-4 md:h-auto">
        <div class="relative w-full h-full bg-black"></div>
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <!-- Modal header -->
          <div class="flex items-center justify-between pb-4 mb-4 border-b rounded-t sm:mb-5 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 xl:text-2xl xl:font-bold dark:text-white">
              Ubah User
            </h3>
            <button @click="closeModal" type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <Icon name="ri:close-fill" />
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <form @submit.prevent>
            <div class="flex flex-col gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label for="nik" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIK</label>
                <input v-model="formData.nik" disabled type="text" name="nik" id="nik"
                  class="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="\d{16}" title="Hanya boleh terdiri dari 16 digit angka." />
              </div>
              <div>
                <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                  Lengkap</label>
                <input v-model="formData.name" disabled type="text" name="fullname" id="fullname"
                  class="bg-gray-300 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$" />
              </div>
              <div>
                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                <input v-model="formData.address" type="text" name="address" id="address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required="" />
              </div>
              <div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input v-model="formData.email" type="email" name="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :required="isRequiredInput" />
                </div>
                <p v-if="submitted && emailError" class="text-sm text-red-600 dark:text-red-400">
                  {{ emailError }}
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button type="submit" @click="updateUser"
                class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700">
                Update
              </button>
              <button @click="closeModal" type="button"
                class="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-900"
                data-modal-toggle="updateModal">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-if="isShowDeleteModal"
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div
        class="bg-black opacity-50 fixed top-0 left-0 right-0 z-50 items-center justify-center w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      </div>
      <div class="relative z-50 w-full h-full max-w-md p-4 md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button @click="closeDeleteModal" type="button"
            class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <Icon name="heroicons-solid:x" size="1rem" />
            <span class="sr-only">Close modal</span>
          </button>
          <p class="mb-4 text-gray-500 dark:text-gray-300">
            Apakah anda yakin untuk menghapus user?
          </p>
          <div class="flex items-center justify-center space-x-4">
            <button @click="deleteUser" type="button"
              class="px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
              Ya, Hapus
            </button>
            <button @click="closeDeleteModal" type="button"
              class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
