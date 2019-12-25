/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const itemmanageRoutes = {
  path: '/TestManagement',
  component: Layout,
  name: 'TestManagement',
    // redirect: '/itemmanage/add',
    alwaysShow: true, 
    name: 'itemmanage',
    meta: {
      title: '试题管理',
      icon: 'edit',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    // children: [
    //   {
    //     path: 'itemadd',
    //     name:'itemadd',
    //     component: () => import('@/views/TestManagement/index'),
    //     meta:{
    //       title:'添加试卷'
    //     }
    //   },
    //   {
    //     path: 'classify',
    //     component: () => import('@/views/TestManagement/TestClassification'),
    //     name: 'classify',
    //     meta:{
    //       title:'试卷分类'
    //     }
        
    //   },
    //   {
    //     path: 'itemlook',
    //     component: () => import('../../views/itemmanage/itemlook.vue'),
    //     name: 'itemlook',
    //     meta:{
    //       title:'查看试卷'
    //     }
    //   }
    // ],
    children: [

      {
          path: 'AddItem',
          component: () =>
              import ('@/views/TestManagement/index'),
          name: 'AddItem',
          meta: { title: '添加试题' }
      },
      {
          path: 'TestClassification',
          component: () =>
              import ('@/views/TestManagement/TestClassification'),
          name: 'TestClassification',
          meta: { title: '试题分类' }
      },
      {
          path: 'CheckItem',
          component: () =>
              import ('@/views/TestManagement/CheckItem'),
          name: 'CheckItem',
          meta: { title: '查看试题' }
      },

  ]
}

export default itemmanageRoutes
