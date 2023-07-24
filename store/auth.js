const useAuthStore = () => {
  const authenticated = ref(false);
  const loading = ref(false);

  async function authenticateUser({ email, password }) {
    // useFetch from nuxt 3 (You should import useFetch from the appropriate location)
    const { data, pending } = await useFetch('https://localhost:6969/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: {
        email,
        password,
      },
    });

    loading.value = pending;

    if (data.value) {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      token.value = data.value.token; // set token to cookie
      authenticated.value = true; // set authenticated state value to true
    }
  }

  function logUserOut() {
    const token = useCookie('token'); // useCookie new hook in nuxt 3
    authenticated.value = false; // set authenticated state value to false
    token.value = null; // clear the token cookie
  }

  return {
    authenticated,
    loading,
    authenticateUser,
    logUserOut,
  };
};

export default useAuthStore;