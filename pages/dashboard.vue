<template>
  <div>
    <SbSideBarItem path="/settings" label="Settings" icon="pi pi-cog" :icon-only="false"/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: true,
  layout: 'dashboard'
})
</script>