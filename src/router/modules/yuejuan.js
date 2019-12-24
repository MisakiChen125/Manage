/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const yueRoutes = {
    path: '/yuejuan',
    component: Layout,
    redirect: '/yuejuan/add',
    alwaysShow: true, 
    name: 'yuejuan',
    meta: {
      title: '阅卷管理',
      icon: 'example',
    //   roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'tepi',
        name:'tepi',
        component: () => import('@/views/yuejuan/tepi'),
        meta:{
          title:'待批班级'
        }
      },{
        path: 'pijuan',
        name:'pijuan',
        component: () => import('@/views/yuejuan/pijuan'),
        
      }
        
      
    ]
}

export default yueRoutes
