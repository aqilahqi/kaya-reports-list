<template>
  <q-page class="row justify-evenly q-py-lg">
    <q-list>
      <div v-for="report in reports" :key="report.id">
        <q-item clickable :to="`/report/${report.id}`">
          <q-item-section>
            <q-item-label>{{ report.title }}</q-item-label>
            <q-item-label v-if="report.subtitle" caption lines="2">{{
              report.subtitle
            }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption class="q-mb-xs">{{ report.datePublished }}</q-item-label>
            <q-badge v-if="report.tag" color="primary" :label="report.tag" />
          </q-item-section>
        </q-item>

        <q-separator inset spaced />
      </div>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { useReportsStore } from 'stores/reports-store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const store = useReportsStore();
const { reports } = storeToRefs(useReportsStore());

// Fetch reports when the component is mounted
onMounted(async () => {
  await store.fetchReports();
});
</script>
