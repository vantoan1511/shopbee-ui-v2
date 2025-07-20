<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <SbSidebar :is-collapsed="collapsed"/>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-auto">
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
      <main class="flex-1 overflow-auto">
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
import SbSidebar from "~/components/SbSidebar.vue";

const collapsed = ref(false)

const isCollapsed = computed(() => collapsed.value)
</script>