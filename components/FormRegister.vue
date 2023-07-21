<template>
  <form>
    <div class="card-header text-center">
      <h2 class="text-primary col-12">Daftar</h2>
    </div>
    <div class="card-body">
      <div class="form-group">
        <label>Nama Lengkap</label>
        <input
          type="text"
          class="form-control"
          required=""
          pattern="^[A-Za-z]+(?:\s[A-Za-z]+)*$"
          title="Masukkan nama Anda dengan karakter yang valid."
        />
      </div>
      <!-- <div class="form-group col-6">
          <label>Nama Belakang</label>
          <input
            type="text"
            class="form-control"
            required=""
            title="Masukkan nama Anda dengan karakter yang valid."
          />
        </div> -->
      <div class="form-group">
        <label>Email</label>
        <input type="email" class="form-control" required="" />
      </div>
      <div class="form-group">
        <label>NIK</label>
        <input
          type="text"
          class="form-control"
          required=""
          pattern="\d{16}"
          title="NIK hanya terdiri dari 16 digit angka"
        />
      </div>
      <div class="form-group">
        <label>Alamat</label>
        <input type="text" class="form-control" required="" />
      </div>
      <div class="row">
        <div class="form-group col-6">
          <label>Kata Sandi</label>
          <div class="password-input">
            <input
              v-model="password"
              :type="showPassword1 ? 'text' : 'password'"
              class="form-control"
              required
            />
            <span class="toggle-password" @click="togglePassword1">
              <i :class="showPassword1 ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
          </div>
        </div>
        <div class="form-group col-6">
          <label>Konfirmasi Kata Sandi</label>
          <div class="password-input">
            <input
              v-model="confirmPassword"
              :type="showPassword2 ? 'text' : 'password'"
              class="form-control"
              required
            />
            <span class="toggle-password" @click="togglePassword2">
              <i :class="showPassword2 ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            name="agree"
            class="custom-control-input"
            id="agree"
          />
          <label class="custom-control-label" for="agree"
            >I agree with the terms and conditions</label
          >
        </div>
      </div>
    </div>
    <div class="card-footer text-right text-center">
      <button class="btn btn-primary col-4 mb-4">Daftar</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const password = ref("");
const confirmPassword = ref("");
const showPassword1 = ref(false);
const showPassword2 = ref(false);

const togglePassword1 = () => {
  showPassword1.value = !showPassword1.value;
};

const togglePassword2 = () => {
  showPassword2.value = !showPassword2.value;
};
</script>

<style>
.password-input {
  position: relative;
}

.toggle-password {
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  transform: translate(0, -50%);
}
</style>
