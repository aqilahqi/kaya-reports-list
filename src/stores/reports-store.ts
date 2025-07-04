import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useReportsStore = defineStore('reports', () => {
  const reports = ref([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchReports = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/reports.json');
      if (!response.ok) {
        throw new Error('Oops! Something went wrong while fetching the reports.');
      }
      reports.value = await response.json();
      console.log('Reports fetched successfully:', reports.value);
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = String(err);
      }
    } finally {
      loading.value = false;
    }
  };

  return {
    reports,
    loading,
    error,
    fetchReports,
    reportCount: computed(() => reports.value.length),
  };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useReportsStore, import.meta.hot));
// }
