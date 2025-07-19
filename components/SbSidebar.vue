<template>
  <aside :class="[isCollapsed ? 'w-20': 'w-xs']"
         class="flex flex-col overflow-hidden rounded-e-2xl shadow-lg transition-all duration-1000">
    <div
        :class="[isCollapsed ? 'justify-center' : 'justify-start']"
        class="flex items-center h-16 p-4 border-b bg-gradient-to-br from-primary-300 to-primary-500 text-white text-nowrap font-bold text-xl">
      <span v-if="!isCollapsed">Shopbee Admin</span>
      <span v-else>S</span>
    </div>
    <nav class="flex flex-1 flex-col overflow-y-auto overflow-x-hidden space-y-2 p-2 bg-gray-50">
      <SbSideBarItem :icon-only="isCollapsed" path="/dashboard" label="Dashboard" icon="pi pi-home"/>
      <SbSideBarItem :icon-only="isCollapsed" path="/configurations" label="Configurations" icon="pi pi-sliders-h"/>
      <SbSideBarItem :icon-only="isCollapsed" path="/settings" label="Settings" icon="pi pi-cog"/>
    </nav>
  </aside>
</template>

<style scoped>

</style>

<script setup lang="ts">

import SbSideBarItem from "~/components/SbSideBarItem.vue";

defineProps<{
  isCollapsed?: boolean
}>();

</script>