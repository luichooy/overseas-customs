import Layout from '@/views/layout';

export const LoginRoute = {
  path: '/login',
  meta: {
    title: 'login'
  },
  component: () => import('@/views/login')
};

export const appRoute = [
  {
    path: '/',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        meta: {
          title: 'home',
          icon: 'el-icon-yto-home'
        },
        component: () => import('@/views/home')
      }
    ]
  },
  {
    path: '/port',
    meta: {
      title: 'nationalPortList',
      icon: 'el-icon-yto-project'
    },
    component: Layout,
    children: [
      {
        path: ':continent',
        component: () => import('@/views/port/index.vue')
      }
    ]
  },
  {
    path: '/basic',
    meta: {
      title: 'basic',
      icon: 'el-icon-yto-project'
    },
    component: Layout,
    children: [
      {
        path: 'upAndDownCompanyManage',
        meta: {
          title: 'upAndDownCompanyManage'
        },
        component: () => import('@/views/basic/upAndDownCompanyManage')
      },
      {
        path: 'nationalPortSetting',
        meta: {
          title: 'nationalPortSetting'
        },
        component: () => import('@/views/basic/nationalPortSetting')
      }
    ]
  },
  {
    path: '/log',
    meta: {
      title: 'log',
      icon: 'el-icon-yto-log'
    },
    component: Layout,
    children: [
      {
        path: 'login',
        meta: {
          title: 'loginLog'
        },
        component: () => import('@/views/log/login')
      }
    ]
  },
  {
    path: '/delare',
    meta: {
      title: 'delare',
      icon: 'el-icon-yto-project'
    },
    component: Layout,
    children: [
      {
        path: 'pudongClearance',
        meta: {
          title: 'pudongClearance'
        },
        component: () => import('@/views/delare/pudongClearance')
      },
      {
        path: 'clearanceInfoManage',
        meta: {
          title: 'clearanceInfoManage'
        },
        component: () => import('@/views/delare/clearanceInfoManage')
      },
      {
        path: 'inExportDataQuery',
        meta: {
          title: 'inExportDataQuery'
        },
        component: () => import('@/views/delare/inExportDataQuery')
      },
      {
        path: 'inExportBillManage',
        meta: {
          title: 'inExportBillManage'
        },
        component: () => import('@/views/delare/inExportBillManage')
      },
      {
        path: 'preClearancePrint',
        meta: {
          title: 'preClearancePrint'
        },
        component: () => import('@/views/delare/preClearancePrint')
      }
    ]
  },
  {
    path: '/credentials',
    meta: {
      title: 'credentials',
      icon: 'el-icon-yto-project'
    },
    component: Layout,
    children: [
      {
        path: 'idCardManage',
        meta: {
          title: 'idCardManage'
        },
        component: () => import('@/views/credentials/idCardManage')
      }
    ]
  },
  {
    path: '/track',
    meta: {
      title: ' track',
      icon: 'el-icon-yto-form'
    },
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: 'track'
        },
        component: () => import('@/views/track/track')
      }
    ]
  }
];

export const routes = [
  LoginRoute,
  ...appRoute
];
