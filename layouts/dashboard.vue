<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside :class="[isCollapsed ? 'w-0': 'w-xs']"
           class="flex flex-col overflow-auto rounded-e-2xl shadow-lg transition-all duration-1000">
      <div
          class="flex items-center h-16 p-4 border-b bg-gradient-to-br from-primary-300 to-primary-500 text-white text-nowrap font-bold text-xl">
        <span>Shopbee Admin</span>
      </div>
      <nav class="flex flex-1 flex-col overflow-auto space-y-2 p-2 bg-gray-50">
        <RouterLink to="/dashboard"
                    active-class="shadow-lg bg-gradient-to-br from-primary-300 to-primary-500 text-white hover:text-white"
                    class="flex flex-nowrap items-center space-x-4 p-4 rounded-xl font-semibold hover:bg-primary-50 hover:text-primary-emphasis transition-colors duration-300">
          <i class="pi pi-home"/>
          <span class="text-nowrap">Dashboard</span>
        </RouterLink>
        <RouterLink to="/settings"
                    active-class="shadow-lg bg-gradient-to-br from-primary-300 to-primary-500 text-white hover:text-white"
                    class="flex flex-nowrap items-center space-x-4 p-4 rounded-xl font-semibold hover:bg-primary-50 hover:text-primary-emphasis transition-colors duration-300">
          <i class="pi pi-cog"/>
          <span class="text-nowrap">Settings</span>
        </RouterLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 ">
      <header class="flex items-center h-16 p-4 shadow">
        <div class="flex-1">
          <Button :icon="PrimeIcons.BARS" rounded size="small" variant="text" severity="contrast"
                  @click="collapsed =! collapsed"/>
        </div>
        <div class="flex flex-row-reverse items-center gap-4">
          <Avatar label="NVT" size="normal" shape="circle" class="hover:cursor-pointer"/>
          <Button :icon="PrimeIcons.BELL" rounded size="small" variant="text" severity="contrast" badge="1"
                  badge-severity="danger"/>
          <Button :icon="PrimeIcons.SEARCH" rounded size="small" variant="text" severity="contrast"/>
        </div>
      </header>
      <main class="flex-1 overflow-auto p-4 ">
        <slot/>
      </main>
      <footer class="flex items-center justify-between h-12 p-2 rounded-tl-2xl bg-primary-50/70 text-muted-color">
        <span>Shopbee 2025 Ltd.</span>
        <span class="text-center">{{ version }}</span>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import {version} from "~/VERSION";
import {PrimeIcons} from "@primevue/core";

const collapsed = ref(false)

const isCollapsed = computed(() => collapsed.value)
</script>