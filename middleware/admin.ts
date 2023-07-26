export default defineNuxtRouteMiddleware(async () => {
  const headers = useRequestHeaders(['cookie'])
  const { data: token } = await useFetch('/api/token', { headers })
  if (token.value!.role === 'ADMIN') {
    return navigateTo('/admin')
  }
})