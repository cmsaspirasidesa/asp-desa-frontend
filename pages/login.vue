<script setup>
const userEmail = ref('')
const userPassword = ref('')
const tipe = ref('password')
const mata = ref('entypo:eye')
const {signIn} = useAuth()

function ubah() {
  if (tipe.value === 'password') {
    tipe.value = 'text'
    mata.value = 'entypo:eye-with-line'
  } else {
    tipe.value = 'password'
    mata.value = 'entypo:eye'
  }
}

definePageMeta({
  layout: 'register',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/user',
  }
});
</script>

<template>
  <div class="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-3xl font-semibold leading-9 tracking-tight text-center text-gray-900">Masuk</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="true" v-model="userEmail"
              class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="relative mt-2">
            <input id="password" name="password" :type="tipe" autocomplete="password" required="true"
              v-model="userPassword"
              class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <a class="absolute right-3 top-[4px] cursor-pointer" @click="ubah">
              <Icon :name="mata" class="text-gray-500 text-[24px]" />
            </a>
          </div>
        </div>

        <div>
          <button type="button"
            @click="signIn('credentials', { email: userEmail, password: userPassword, page: 'login' })"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kirim</button>
        </div>
      </form>

      <p class="mt-10 text-sm text-center text-gray-500">
        Belum punya akun?
        <NuxtLink to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Daftar
        </NuxtLink>
      </p>
    </div>
  </div>
</template>