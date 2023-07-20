<script setup>
</script>

<template>
  <div class="login">
    <form>
      <h3>Masuk</h3>

      <label for="email">Email</label>
      <input type="email" placeholder="Email" id="email">

      <label for="password">Password</label>
      <input type="password" placeholder="Password" id="password">

      <button>Log In</button>
    </form>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.login {
  background-color: #393646;
  widows: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

.login form * {
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

.login form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

.login form label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

.login form input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

.login form input::placeholder {
  color: #e5e5e5;
}

.login form button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  .login form {
    padding: 50px 15px;
    margin: 0 10px;
  }
}
</style>
