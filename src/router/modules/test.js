/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const testRoutes = {
    path: '/test',
    component: Layout,
    redirect: '/test/add',
    alwaysShow: true, 
    name: 'test',
    meta: {
      title: '考试管理',
      icon: 'clipboard',
    //   roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'testadd',
        name:'testadd',
        component: () => import('@/views/test/testadd'),
        meta:{
          title:'添加考试'
        }
      },
      {
        path: 'testlist',
        component: () => import('@/views/test/testlist'),
        name: 'testlist',
        meta:{
          title:'试卷列表'
        }
        
      }
    ]
}

export default testRoutes
