<script setup>
const images = reactive([]);
const notImage = ref(false);
const batas = ref(false);
const imageFiles = reactive([]);

function createImage(files) {
  batas.value = false;
  notImage.value = false;
  if (files[0].type.split('/')[0] === 'image') {
    for (let index = 0; index < files.length; index++) {
      let reader = new FileReader();
      reader.onload = function (event) {
        const imageUrl = event.target.result;
        if (images.length >= 4) {
          notImage.value = false;
          batas.value = true;
        } else {
          images.push(imageUrl);
        }
      };
      reader.readAsDataURL(files[index]);
    }
  } else {
    batas.value = false;
    notImage.value = true;
  }
}

function onOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
}

function onDrop(e) {
  e.preventDefault();
  const files = e.dataTransfer.files;
  createImage(files);
  imageFiles.push(files);
}

function onFileChange(e) {
  const files = e.target.files;
  createImage(files);
  imageFiles.push(files);
}

function removeImage(index) {
  images.splice(index, 1);
  imageFiles.splice(index, 1);
}

const formData = ref({
  name: '',
  email: '',
  title: '',
  location: '',
  description: '',
});

const addAspiration = async (inputData) => {
  const formData = new FormData();
  imageFiles.forEach((image) => {
    formData.append('images', image[0]);
  });

  formData.append('judul', inputData.title);
  formData.append('deskripsi', inputData.description);
  formData.append('lokasi', inputData.location);
  formData.append('email', inputData.email);
  formData.append('nama', inputData.name);

  try {
    const response = await useFetch('http://localhost:6969/aspirations/guest', {
      method: 'POST',
      body: formData,
    });

    console.log('server response: ', response);
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <form @submit.prevent
    class="bg-white md:max-w-[400px] max-w-[350px] w-full m-auto flex flex-col px-6 py-3 rounded-[12px] md:border md:border-solid md:border-gray-300">
    <div>
      <div class="px-4 mx-auto">
        <h2 class="mb-2 text-3xl font-bold text-center text-gray-900 dark:text-white">
          Form Aspirasi
        </h2>
      </div>
      <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
      <div class="mt-2">
        <input v-model="formData.name" type="text" required="true" name="nama" id="nama" autocomplete="nama"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-2">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <div class="mt-2">
        <input v-model="formData.email" type="email" required="true" name="email" id="email" autocomplete="email"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-2">
      <label for="judul" required="true" class="block text-sm font-medium leading-6 text-gray-900">Judul</label>
      <div class="mt-2">
        <input v-model="formData.title" type="text" name="judul" id="judul" autocomplete="judul"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-2">
      <label for="alamat" required="true" class="block text-sm font-medium leading-6 text-gray-900">Alamat Desa</label>
      <div class="mt-2">
        <input v-model="formData.location" type="text" name="alamat" id="alamat" autocomplete="alamat"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-2">
      <label for="deskripsi" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
      <div class="mt-2">
        <textarea v-model="formData.description" id="deskripsi" name="deskripsi" rows="5"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div class="mt-2">
      <div class="flex justify-between">
        <p class="text-sm font-medium leading-6 text-gray-900">Foto</p>
        <div v-if="notImage">
          <p class="text-sm font-medium leading-6 text-red-600">
            File harus image
          </p>
        </div>
        <div v-if="batas">
          <p class="text-sm font-medium leading-6 text-red-600">
            Maksimal 4 image
          </p>
        </div>
      </div>
      <div class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25" @drop="onDrop"
        @dragover="onOver">
        <div class="text-center">
          <Icon name="heroicons-solid:photo" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
          <div class="flex mt-4 text-sm leading-6 text-gray-600">
            <label for="foto"
              class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Upload a file</span>
              <input id="foto" name="foto" multiple type="file" class="sr-only" @change="onFileChange" accept="image/*" />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>

    <div v-if="images" class="flex flex-wrap justify-center w-full gap-2 mt-2">
      <div v-for="(foto, index) in images" class="bg-orange-400 rounded-md overflow-hidden w-[45%] h-[100px] relative">
        <img :src="foto" alt="Gambar Aspirasi" class="object-cover object-center w-full h-full" />
        <button type="button" @click="removeImage(index)"
          class="absolute right-1 top-1 w-5 h-5 bg-red-600 flex justify-center items-center rounded-[50%]">
          <Icon name="ci:close-md" class="text-white" />
        </button>
      </div>
    </div>

    <div class="flex items-center justify-end mt-2 gap-x-6">
      <button @click="addAspiration(formData)" type="submit"
        class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Kirim
      </button>
    </div>
  </form>
</template>
