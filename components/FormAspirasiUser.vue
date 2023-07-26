<script setup>
const image = reactive([]);
const isImage = ref(false);
const isLimit = ref(false);

function createImage(files) {
  isLimit.value = false;
  isImage.value = false;
  if (files[0].type.split("/")[0] === "image") {
    for (let index = 0; index < files.length; index++) {
      let reader = new FileReader();
      reader.onload = function (event) {
        const imageUrl = event.target.result;
        if (image.length >= 4) {
          isImage.value = false;
          isLimit.value = true;
        } else {
          image.push(imageUrl);
        }
      };
      reader.readAsDataURL(files[index]);
    }
  } else {
    isLimit.value = false;
    isImage.value = true;
  }
}

function onOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
}

function onDrop(e) {
  e.preventDefault();
  const files = e.dataTransfer.files;
  createImage(files);
}

function onFileChange(e) {
  var files = e.target.files;
  createImage(files);
}

function removeImage(index) {
  image.splice(index, 1);
}
</script>

<template>
  <form
    class="bg-white md:max-w-[80vw] xl:max-w-[450px] max-w-[350px] w-full m-auto flex flex-col px-6 py-3 rounded-[12px] md:border md:border-solid md:border-gray-300 border border-solid">
    <div>
      <div class="px-4 mx-auto">
        <h2 class="mb-5 text-3xl font-bold text-center text-gray-900 dark:text-white">
          Form Aspirasi
        </h2>
      </div>
    </div>
    <div class="mt-2">
      <label for="headline" required="true" class="block text-sm font-medium leading-6 text-gray-900">Judul</label>
      <div class="mt-2">
        <input type="text" name="headline" id="headline" autocomplete="headline"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-2">
      <label for="address" required="true" class="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
      <div class="mt-2">
        <input type="text" name="address" id="address" autocomplete="address"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
    <div class="mt-2">
      <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Deskripsi</label>
      <div class="mt-2">
        <textarea id="description" name="description" rows="5"
          class="block w-full bg-gray-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>

    <div class="mt-2">
      <div class="flex justify-between">
        <p class="text-sm font-medium leading-6 text-gray-900">Foto</p>
        <div v-if="isImage">
          <p class="text-sm font-medium leading-6 text-red-600">
            File yang diunggah harus berupa gambar (JPEG, PNG, atau GIF).
          </p>
        </div>
        <div v-if="isLimit">
          <p class="text-sm font-medium leading-6 text-red-600">
            Maksimal unggah 4 yang diizinkan.
          </p>
        </div>
      </div>
      <div class="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25" @drop="onDrop"
        @dragover="onOver">
        <div class="text-center">
          <Icon name="heroicons-solid:photo" class="w-12 h-12 mx-auto text-gray-300" aria-hidden="true" />
          <div class="flex mt-4 text-sm leading-6 text-gray-600">
            <label for="photo"
              class="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Upload a file</span>
              <input id="photo" name="photo" multiple type="file" class="sr-only" @change="onFileChange"
                accept="image/*" />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>

    <div v-if="image" class="flex flex-wrap justify-center w-full gap-2 mt-2">
      <div v-for="(photo, index) in image" class="bg-orange-400 rounded-md overflow-hidden w-[45%] h-[100px] relative">
        <img :src="photo" alt="gambar aspirasi" class="object-cover object-center w-full h-full" />
        <button type="button" @click="removeImage(index)"
          class="absolute right-1 top-1 w-5 h-5 bg-red-600 flex justify-center items-center rounded-[50%]">
          <Icon name="ci:close-md" class="text-white" />
        </button>
      </div>
    </div>

    <div class="flex items-center justify-end mt-2 gap-x-6">
      <button type="submit"
        class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Kirim
      </button>
    </div>
  </form>
</template>
