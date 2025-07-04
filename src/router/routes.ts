import type { RouteRecordRaw } from 'vue-router';
import IndexPage from 'pages/IndexPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: IndexPage, name: 'Home' },
      { path: 'report/:id', component: () => import('pages/ReportPage.vue'), name: 'Report' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
