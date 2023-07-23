<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Daftar
          </h1>
          <form
            class="space-y-4 md:space-y-6"
            action="POST"
            @submit.prevent="handleSubmit"
          >
            <div>
              <label
                for="fullname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Nama Lengkap</label
              >
              <input
                type="text"
                name="fullname"
                id="fullname"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="contoh: John Doe"
                required=""
                pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
                title="Nama tidak sesuai format."
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="mail@example.com"
                required=""
              />
            </div>
            <div>
              <label
                for="nik"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >NIK</label
              >
              <input
                type="text"
                name="nik"
                id="nik"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="321XXXXXXXXXXXXX"
                required=""
                pattern="\d{16}"
                title="Hanya boleh terdiri dari 16 digit angka."
              />
            </div>
            <div>
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Alamat</label
              >
              <input
                type="text"
                name="address"
                id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jl. Melon Runtuh No.12"
                required=""
              />
            </div>
            <div>
              <div class="flex gap-4">
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Kata Sandi</label
                  >
                  <div class="relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      v-model="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      minlength="8"
                      @focus="clearErrorMessage"
                    />
                    <span class="password-toggle" @click="togglePassword">
                      <Icon
                        :name="showPassword ? 'uil:eye-slash' : 'uil:eye'"
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Konfirmasi Kata Sandi</label
                  >
                  <div class="relative">
                    <input
                      :type="showConfirmPassword ? 'text' : 'password'"
                      v-model="confirmPassword"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      @focus="clearErrorMessage"
                    />
                    <span
                      class="password-toggle"
                      @click="toggleConfirmPassword"
                    >
                      <Icon
                        :name="
                          showConfirmPassword ? 'uil:eye-slash' : 'uil:eye'
                        "
                      />
                    </span>
                  </div>
                </div>
              </div>
              <p
                v-if="submitted && passwordError"
                class="text-sm text-red-600 dark:text-red-400"
              >
                {{ passwordError }}
              </p>
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label
                  for="terms"
                  class="font-light text-gray-500 dark:text-gray-300"
                  >I accept the
                  <a
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                    >Terms and Conditions</a
                  ></label
                >
              </div>
            </div>
            <button
              type="submit"
              @click="handleSubmit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const password = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const submitted = ref(false);
const passwordError = ref("");

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const clearErrorMessage = () => {
  passwordError.value = "";
};

const handleSubmit = () => {
  submitted.value = true;
  passwordError.value = "";

  if (password.value === "") {
    passwordError.value = "Kata sandi tidak boleh kosong!";
  }

  if (password.value !== "" && password.value !== confirmPassword.value) {
    passwordError.value =
      "Kata sandi tidak sesuai dengan konfirmasi kata sandi.";
  }

  if (!passwordError.value) {
    password.value = "";
    confirmPassword.value = "";
    submitted.value = false;
  }
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
