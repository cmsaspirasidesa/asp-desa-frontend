<script setup>
defineProps({
  users: {
    type: Object
  }
})
</script>

<template>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="p-4">
          <span class="text-lg">#</span>
        </th>
        <th scope="col" class="px-6 py-3">
          Nama
        </th>
        <th scope="col" class="px-6 py-3">
          Email
        </th>
        <th scope="col" class="px-6 py-3">
          NIK
        </th>
        <th scope="col" class="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) of users" :key="user.id"
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <span class="font-semibold text-black">{{ index + 1 }}</span>
        </td>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {{ user.nama }}
        </th>
        <td class="px-6 py-4">{{ user.email }}</td>
        <td class="px-6 py-4">{{ user.nik }}</td>
        <td class="box-border flex justify-center gap-1 py-4">
          <Icon class="w-1/4 h-full p-1 text-lg rounded text-amber-500 hover:bg-amber-900 hover:text-amber-200"
            name="material-symbols:edit-outline-rounded" />
          <Icon class="w-1/4 h-full p-1 text-lg text-red-500 rounded hover:bg-red-900 hover:text-red-200"
            name="ic:twotone-delete-forever" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
