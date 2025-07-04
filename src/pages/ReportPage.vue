<template>
  <q-page class="row justify-evenly">
    <HeroSection v-if="reportDetails" :report="reportDetails" />
  </q-page>
</template>

<script setup lang="ts">
import { useReportsStore } from 'stores/reports-store';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { Report } from 'src/types/report.ts';
import HeroSection from 'src/components/HeroSection.vue';

const store = useReportsStore();
const route = useRoute();
const router = useRouter();

const reportDetails = ref<Report | null>(null);

onMounted(async () => {
  if (store.reports.length === 0) {
    await router.replace('/');
    return;
  }
  const result = store.getReportbyId(route.params.id as string);
  reportDetails.value = result !== undefined ? result : null;
});
</script>

<style scoped></style>
