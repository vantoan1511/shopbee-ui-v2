<template>
  <RouterLink
      :to="path"
      :class="[iconOnly ? 'justify-center' : 'justify-start']"
      active-class="shadow-lg bg-gradient-to-br from-primary-300 to-primary-500 text-white hover:text-white"
      class="flex flex-nowrap items-center space-x-4 p-4 rounded-xl h-14 font-semibold hover:bg-primary-50 hover:text-primary-emphasis transition-colors duration-300"
  >
    <i :class="icon"/>
    <span v-if="!iconOnly" class="text-nowrap truncate">{{ label }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  path: string
  label: string
  icon: string
  iconOnly?: boolean
}>();
</script>