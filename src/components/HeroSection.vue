<template>
  <q-card class="my-card" flat square>
    <q-img
      error-src="~assets/image-placeholder.png"
      :fit="!errorImage ? 'cover' : 'contain'"
      height="360px"
      :src="props.report.backgroundImageUrl"
      @error="() => (errorImage = true)"
    />

    <q-card-section class="">
      <div class="row justify-between items center q-mb-md">
        <h1 class="text-h6 q-my-none">{{ props.report.title }}</h1>
        <div class="q-pl-lg q-pt-xs">
          <q-badge v-if="props.report.tag" color="primary" :label="props.report.tag" />
        </div>
      </div>
      <p v-if="props.report.subtitle" class="text-subtitle1">{{ props.report.subtitle }}</p>
      <p v-if="props.report.theme" class="q-mb-sm">Theme: {{ props.report.theme }}</p>
      <p v-if="props.report.path" class="q-mb-sm">Path: {{ props.report.path }}</p>
      <p v-if="props.report.cta">CTA: {{ props.report.cta }}</p>
    </q-card-section>

    <q-separator />

    <q-card-section class="row justify-between items-center">
      <p class="text-grey text-caption">Published on {{ props.report.datePublished }}</p>
      <p v-if="props.report.dateUpdated" class="text-grey text-caption">
        Last updated {{ props.report.dateUpdated }}
      </p>
    </q-card-section>

    <q-card-actions v-if="props.report.cta" align="right">
      <q-btn color="primary" no-caps padding="sm lg"> {{ props.report.cta }} </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Report } from 'src/types/report.ts';

const errorImage = ref(false);

const props = defineProps<{
  report: Report;
}>();
</script>

<style scoped></style>
