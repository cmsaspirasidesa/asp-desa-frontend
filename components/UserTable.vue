<template>
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th
          scope="col"
          class="p-4"
        >
          <span class="text-lg">#</span>
        </th>
        <th
          scope="col"
          class="px-6 py-3"
        >
          Nama
        </th>
        <th
          scope="col"
          class="px-6 py-3"
        >
          Email
        </th>
        <th
          scope="col"
          class="px-6 py-3"
        >
          Alamat
        </th>
        <th
          scope="col"
          class="px-6 py-3"
        >
          NIK
        </th>
        <th
          scope="col"
          class="px-6 py-3"
        >
          Role
        </th>
        <th
          scope="col"
          class="px-6 py-3"
        >
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <span class="text-black font-semibold">1</span>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Janu
        </th>
        <td class="px-6 py-4">janu@mail.com</td>
        <td class="px-6 py-4">Jalan Belimbing</td>
        <td class="px-6 py-4">2132194817</td>
        <td class="px-6 py-4">Admin</td>
        <td class="flex justify-center py-4 gap-1 box-border">
          <Icon
            class="text-lg w-1/4 h-full p-1 text-amber-500 hover:bg-amber-900 rounded hover:text-amber-200"
            name="material-symbols:edit-outline-rounded"
          />
          <Icon
            class="text-lg w-1/4 h-full p-1 text-red-500 hover:bg-red-900 rounded hover:text-red-200"
            name="ic:twotone-delete-forever"
          />
        </td>
      </tr>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <span class="text-black font-semibold">2</span>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Kimi
        </th>
        <td class="px-6 py-4">kimi@mail.com</td>
        <td class="px-6 py-4">Jalan Manga</td>
        <td class="px-6 py-4">2132194818</td>
        <td class="px-6 py-4">User</td>
        <td class="flex justify-center py-4 gap-1">
          <Icon
            class="text-lg w-1/4 h-full p-1 text-amber-500 hover:bg-amber-900 rounded hover:text-amber-200"
            name="material-symbols:edit-outline-rounded"
          />
          <Icon
            class="text-lg w-1/4 h-full p-1 text-red-500 hover:bg-red-900 rounded hover:text-red-200"
            name="ic:twotone-delete-forever"
          />
        </td>
      </tr>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <span class="text-black font-semibold">3</span>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Bob
        </th>
        <td class="px-6 py-4">bob@mail.com</td>
        <td class="px-6 py-4">Jalan Jeruk</td>
        <td class="px-6 py-4">2132194819</td>
        <td class="px-6 py-4">User</td>
        <td class="flex justify-center py-4 gap-1">
          <Icon
            class="text-lg w-1/4 h-full p-1 text-amber-500 hover:bg-amber-900 rounded hover:text-amber-200"
            name="material-symbols:edit-outline-rounded"
          />
          <Icon
            class="text-lg w-1/4 h-full p-1 text-red-500 hover:bg-red-900 rounded hover:text-red-200"
            name="ic:twotone-delete-forever"
          />
        </td>
      </tr>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <span class="text-black font-semibold">4</span>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Rae
        </th>
        <td class="px-6 py-4">rae@mail.com</td>
        <td class="px-6 py-4">Jalan Jambu</td>
        <td class="px-6 py-4">2132194820</td>
        <td class="px-6 py-4">User</td>
        <td class="flex justify-center py-4 gap-1">
          <Icon
            class="text-lg w-1/4 h-full p-1 text-amber-500 hover:bg-amber-900 rounded hover:text-amber-200"
            name="material-symbols:edit-outline-rounded"
          />
          <Icon
            class="text-lg w-1/4 h-full p-1 text-red-500 hover:bg-red-900 rounded hover:text-red-200"
            name="ic:twotone-delete-forever"
          />
        </td>
      </tr>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <span class="text-black font-semibold">5</span>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Sam
        </th>
        <td class="px-6 py-4">sam@mail.com</td>
        <td class="px-6 py-4">Jalan Nangka</td>
        <td class="px-6 py-4">2132194821</td>
        <td class="px-6 py-4">User</td>
        <td class="flex justify-center py-4 gap-1">
          <Icon
            class="text-lg w-1/4 h-full p-1 text-amber-500 hover:bg-amber-900 rounded hover:text-amber-200"
            name="material-symbols:edit-outline-rounded"
          />
          <Icon
            class="text-lg w-1/4 h-full p-1 text-red-500 hover:bg-red-900 rounded hover:text-red-200"
            name="ic:twotone-delete-forever"
          />
        </td>
      </tr>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <td class="w-4 p-4">
          <span class="text-black font-semibold">6</span>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Rumi
        </th>
        <td class="px-6 py-4">rumi@mail.com</td>
        <td class="px-6 py-4">Jalan Lemon</td>
        <td class="px-6 py-4">2132194822</td>
        <td class="px-6 py-4">User</td>
        <td class="flex justify-center py-4 gap-1">
          <Icon
            class="text-lg w-1/4 h-full p-1 text-amber-500 hover:bg-amber-900 rounded hover:text-amber-200"
            name="material-symbols:edit-outline-rounded"
          />
          <Icon
            class="text-lg w-1/4 h-full p-1 text-red-500 hover:bg-red-900 rounded hover:text-red-200"
            name="ic:twotone-delete-forever"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
