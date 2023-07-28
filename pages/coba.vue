<template>
  <div>
    <p>Sign-In Options:</p>
    <button class="p-4 mr-6 bg-blue-500"
      @click="signIn('credentials', { email: 'admin1@gmail.com', password: '123', page: 'login' })">in</button>
    <button class="p-4 bg-red-500" @click="signOut()">out</button>
    <p>{{ status }}</p>
    <br>
    <p>{{ data }}</p>
    <br>
    <p>{{ access }}</p>
    <p>{{ waktu }}</p>
    <p>{{ exp }}</p>
    <p>{{ claims }}</p>
    <br>
  </div>
</template>
<script setup>
definePageMeta({
  auth: {
    // unauthenticatedOnly: true,
    // navigateAuthenticatedTo: '/jaga',
  }
})
import * as jose from 'jose'
const {signIn, signOut, status, data, getSession, getProviders, } = useAuth()
const headers = useRequestHeaders(['cookie'])
const {data: token} = await useFetch('/api/token', {headers})
const access = token.value
const waktu = Date.now()
const exp = token.value.exp * 1000
const claims = jose.decodeJwt(token.value.jwt)
console.log(claims)
</script>