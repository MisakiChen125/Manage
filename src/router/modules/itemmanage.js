/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const itemmanageRoutes = {
  path: '/TestManagement',
  component: Layout,
  name: 'TestManagement',
    // redirect: '/itemmanage/add',
    alwaysShow: true, 
    name: 'Itemmanage',
    meta: {
      title: 'itemmanage',
      icon: 'edit',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [

      {
          path: 'AddItem',
          component: () =>
              import ('@/views/TestManagement/index'),
          name: 'AddItem',
          meta: { title: 'addItem' }
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
