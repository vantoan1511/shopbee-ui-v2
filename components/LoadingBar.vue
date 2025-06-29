<script setup lang="ts">
const loading = ref(false);

onMounted(() => {
  const router = useRouter();

  router.beforeEach(() => {
    loading.value = true;
  })

  router.afterEach(() => {
    loading.value = false;
  })
})
</script>

<template>
  <div v-if="loading" class="fixed top-0 left-0 right-0 z-50">
    <ProgressBar mode="indeterminate" style="height: 5px"/>
  </div>
</template>