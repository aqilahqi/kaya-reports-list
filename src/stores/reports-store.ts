import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Report } from 'src/types/report';

export const useReportsStore = defineStore('reports', () => {
  const reports = ref<Report[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Fetch reports from a JSON file
  const fetchReports = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch('/reports.json');
      if (!response.ok) throw new Error('Failed to fetch reports.');
      reports.value = await response.json();
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err);
    } finally {
      loading.value = false;
    }
  };

  // Get reports by report ID
  const getReportbyId = (id: string) => {
    return reports.value.filter((report) => report.id === id)[0];
  };

  return {
    reports,
    loading,
    error,
    fetchReports,
    getReportbyId,
    reportCount: computed(() => reports.value.length),
  };
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useReportsStore, import.meta.hot));
// }
