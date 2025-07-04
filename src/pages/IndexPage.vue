<template>
  <q-page class="row items-center justify-evenly">

  </q-page>
</template>

<script setup lang="ts">
import { useReportsStore } from 'stores/reports-store';
// import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';

const store = useReportsStore();
// const { reports } = storeToRefs(useReportsStore());

// Fetch reports when the component is mounted
onMounted(async() => {
  await store.fetchReports()
});

</script>
