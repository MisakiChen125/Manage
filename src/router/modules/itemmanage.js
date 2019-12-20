/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const itemmanageRoutes = {
    path: '/itemmanage',
    component: Layout,
    redirect: '/itemmanage/add',
    alwaysShow: true, 
    name: 'itemmanage',
    meta: {
      title: '试题管理',
      icon: 'edit',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'itemadd',
        name:'itemadd',
        component: () => import('@/views/itemmanage/itemadd'),
        meta:{
          title:'添加试卷'
        }
      },
      {
        path: 'classify',
        component: () => import('@/views/itemmanage/classify'),
        name: 'classify',
        meta:{
          title:'试卷分类'
        }
        
      },
      {
        path: 'itemlook',
        component: () => import('../../views/itemmanage/itemlook.vue'),
        name: 'itemlook',
        meta:{
          title:'查看试卷'
        }
      }
    ]
}

export default itemmanageRoutes
