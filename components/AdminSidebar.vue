<script setup>
const isManjemen = ref(false)
function toggleManajemen() {
  isManjemen.value = !isManjemen.value
}
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidenav" id="drawer-navigation">
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <form
        action="#"
        method="GET"
        class="md:hidden mb-2"
      >
        <label
          for="sidebar-search"
          class="sr-only"
          >Search</label
        >
      </form>
      <ul class="space-y-2">
        <li>
          <NuxtLink
            to="/admin"
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <Icon
              name="ri:pie-chart-2-fill"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <button
            @click="toggleManajemen"
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-pages"
            data-collapse-toggle="dropdown-pages"
          >
            <Icon
              name="mdi:file-document"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
            <span class="flex-1 ml-3 text-left whitespace-nowrap"
              >Manajemen</span
            >
            <Icon
              v-if="!isManjemen"
              name="ic:outline-keyboard-arrow-down"
              class="w-6 h-6"
            />
            <Icon
              v-if="isManjemen"
              name="ic:outline-keyboard-arrow-up"
              class="w-6 h-6"
            />
          </button>
          <ul id="dropdown-pages" class="hidden py-2 space-y-2">
            <li>
              <NuxtLink
                to="../admin/user"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >User</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="../admin/aspirasi"
                class="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >Aspirasi</NuxtLink
              >
            </li>
          </ul>
        </li>
        </li>
      </ul>
    </div>
    <div
      class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20">
      <div id="tooltip-settings" role="tooltip"
        class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
        Settings page
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      <!-- Dropdown -->
    </div>
  </aside>
</template>
