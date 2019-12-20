/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const usersRoutes = {
    path: '/users',
    component: Layout,
    redirect: '/users/add',
    alwaysShow: true, 
    name: 'users',
    meta: {
      title: '用户管理',
      icon: 'user',
    //   roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'usersadd',
        name:'usersadd',
        component: () => import('@/views/users/usersadd'),
        meta:{
          title:'添加用户'
        }
      },
      {
        path: 'usershow',
        component: () => import('@/views/users/usershow'),
        name: 'usershow',
        meta:{
          title:'用户展示'
        }
        
      }
    ]
}

export default usersRoutes
