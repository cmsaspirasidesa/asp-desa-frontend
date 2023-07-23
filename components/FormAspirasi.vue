<script setup>
const gambar = reactive([])
const notImage = ref(false)
const batas = ref(false)

function createImage(files) {
  batas.value = false
  notImage.value = false
  if (files[0].type.split("/")[0] === 'image') {
    for (let index = 0; index < files.length; index++) {
      let reader = new FileReader();
      reader.onload = function (event) {
        const imageUrl = event.target.result;
        if (gambar.length >= 4) {
          notImage.value = false
          batas.value = true
        } else {
          gambar.push(imageUrl);
        }
      }
      reader.readAsDataURL(files[index]);
    }
  } else {
    batas.value = false
    notImage.value = true
  }
}

function onOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}

function onDrop(e) {
  e.preventDefault();
  const files = e.dataTransfer.files;
  createImage(files)
}

function onFileChange(e) {
  var files = e.target.files
  createImage(files);
}

function removeImage(index) {
  gambar.splice(index, 1)
}

</script>

<template>
  <form
    class="md:max-w-[400px] max-w-[350px] w-full m-auto md:mt-10 flex flex-col px-2 py-5 sm:p-10 rounded-[12px] md:border md:border-solid md:border-gray-300">
    <div>
      <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama</label>
      <div class="mt-2">
        <input type="text" required="true" name="nama" id="nama" autocomplete="nama"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <div class="mt-2">
        <input type="email" required="true" name="email" id="email" autocomplete="email"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="judul" required="true" class="block text-sm font-medium leading-6 text-gray-900">Judul</label>
      <div class="mt-2">
        <input type="text" name="judul" id="judul" autocomplete="judul"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="alamat" required="true" class="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
      <div class="mt-2">
        <input type="text" name="alamat" id="alamat" autocomplete="alamat"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-6">
      <label for="deskripsi" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
      <div class="mt-2">
        <textarea id="deskripsi" name="deskripsi" rows="5"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div class="mt-6">
      <div class="flex justify-between">
        <p class="text-sm font-medium leading-6 text-gray-900">Foto</p>
        <div v-if="notImage">
          <p class="text-red-600 leading-6 text-sm font-medium">File harus image</p>
        </div>
        <div v-if="batas">
          <p class="text-red-600 leading-6 text-sm font-medium">Maksimal 4 image</p>
        </div>
      </div>
      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10" @drop="onDrop"
        @dragover="onOver">
        <div class="text-center">
          <Icon name="heroicons-solid:photo" class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
          <div class="mt-4 flex text-sm leading-6 text-gray-600">
            <label for="foto"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Upload a file</span>
              <input id="foto" name="foto" multiple type="file" class="sr-only" @change="onFileChange" accept="image/*" />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>

    <div v-if="gambar" class="flex flex-wrap w-full gap-2 mt-2 justify-center">
      <div v-for="(foto, index) in gambar" class="bg-orange-400 rounded-md overflow-hidden w-[45%] h-[100px] relative">
        <img :src="foto" alt="Gambar Aspirasi" class="h-full w-full object-cover object-center" />
        <button type="button" @click="removeImage(index)"
          class="absolute right-1 top-1 w-5 h-5 bg-red-600 flex justify-center items-center rounded-[50%]">
          <Icon name="ci:close-md" class="text-white" />
        </button>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kirim</button>
    </div>
  </form>
</template>