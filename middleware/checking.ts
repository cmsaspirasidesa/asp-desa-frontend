export default defineNuxtRouteMiddleware(async () => {

  const headers = useRequestHeaders(['cookie']);
  const { data: token } = await useFetch('/api/token', { headers });
  const { signOut } = useAuth()
  const dataToken = jose.decodeJwt(token.value!.jwt)

  if (dataToken.exp < Date.now() / 1000) {
    return signOut()
  }
})
