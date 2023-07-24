<template>
  <section class="h-full bg-slate-300 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:py-4">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Daftar
          </h1>
          <form class="space-y-4 md:space-y-2" action="POST" @submit.prevent="handleSubmit">
            <div>
              <label for="fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama
                Lengkap</label>
              <input type="text" name="fullname" id="fullname"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan nama lengkap anda" required="true" pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
                title="Nama tidak sesuai format." />
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" name="email" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan email anda" required="true" />
            </div>
            <div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata
                  Sandi</label>
                <div class="relative">
                  <input :type="showPassword ? 'text' : 'password'" v-model="password" name="password" id="password"
                    placeholder="Masukkan password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required minlength="8" @focus="clearErrorMessage" />
                  <span class="password-toggle" @click="togglePassword">
                    <Icon :name="showPassword ? 'uil:eye-slash' : 'uil:eye'" />
                  </span>
                </div>
              </div>

              <p v-if="submitted && passwordError" class="text-sm text-red-600 dark:text-red-400">
                {{ passwordError }}
              </p>
            </div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIK</label>
              <input type="text" name="address" id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan NIK anda" required="true" />
            </div>
            <div>
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
              <input type="text" name="address" id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukkan alamat anda" required="true" />
            </div>
            <div class="pt-5">
              <button type="button" @click="handleSubmit"
                class="w-full text-teal-950 bg-teal-200 font-bold hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Daftar
              </button>
            </div>
            <div>
              <p class="mt-4">Sudah punya akun?
                <a href="#" class="text-blue-600">Masuk</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';

const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const submitted = ref(false);
const passwordError = ref('');

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const clearErrorMessage = () => {
  passwordError.value = '';
};

async function handleSubmit() {
  // submitted.value = true;
  // passwordError.value = '';

  // if (password.value === '') {
  //   passwordError.value = 'Kata sandi tidak boleh kosong!';
  //   return
  // }

  // if (password.value !== '' && password.value) {
  //   passwordError.value = 'Kata sandi tidak sesuai dengan konfirmasi kata sandi.';
  //   return
  // }

  // if (!passwordError.value) {
  //   password.value = '';
  //   confirmPassword.value = '';
  //   submitted.value = false;
  //   return
  // }
  const {data, pending, error, refresh} = await useFetch('http://localhost:6969/register', {
    method: 'POST',
    body: {
      'nama': 'Ruhyan',
      'email': 'Ruhyan@gmail.com',
      'password': '1234567890',
      'alamat': 'jl.rawabebek, pasar senen, jakarta',
      'nik': '121212121679',
    },
  })

  $fetch('', {

  })
};
</script>
<style>
.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  transform: translate(0, -50%);
}
</style>
