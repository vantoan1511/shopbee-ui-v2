<template>
  <main class="flex flex-col p-4">
    <div class="p-2">
      <IconField class="bg-white">
        <InputIcon class="pi pi-search"/>
        <InputText fluid placeholder="Search configuration name..."/>
      </IconField>
    </div>
    <ul class="flex flex-col gap-y-2 p-2 w-full">
      <li class="flex items-center space-x-2 h-12 px-2 rounded-lg hover:bg-gray-50 hover:shadow-sm hover:cursor-pointer transition-all duration-300">
        <div class="flex-1 truncate font-bold">Configuration name</div>
        <div class="flex-1 truncate">value_01</div>
      </li>
      <li class="flex items-center space-x-2 h-12 px-2 rounded-lg hover:bg-gray-50 hover:shadow-sm hover:cursor-pointer transition-all duration-300">
        <div class="flex-1 truncate font-bold">Configuration name</div>
        <div class="flex-1 truncate">value_01</div>
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  auth: true,
  layout: 'dashboard'
})
</script>