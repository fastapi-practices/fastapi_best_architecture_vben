import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    name: 'Log',
    path: '/log',
    meta: {
      title: $t('page.menu.log'),
      icon: 'icon-bug',
      order: 3,
    },
    children: [
      {
        name: 'Login',
        path: 'login',
        component: () => import('#/views/log/login/index.vue'),
        meta: {
          title: $t('page.menu.login'),
        },
      },
      {
        name: 'Opera',
        path: 'opera',
        component: () => import('#/views/log/opera/index.vue'),
        meta: {
          title: $t('page.menu.opera'),
        },
      },
    ],
  },
];

export default routes;
