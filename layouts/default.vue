<template>
  <slot/>
</template>

<script setup lang="ts">
const {currentTheme, setTheme} = useTheme()

onMounted(() => {
  setTheme(currentTheme.value)
})
</script>