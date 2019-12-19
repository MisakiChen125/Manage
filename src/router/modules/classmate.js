/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const classRoutes = {
    path: '/classmate',
    component: Layout,
    redirect: '/classmate/add',
    alwaysShow: true, 
    name: 'classmate',
    meta: {
      title: '班级管理',
      icon:'form'
    },
    children: [
      {
        path: 'class',
        name:'class',
        component: () => import('@/views/class/class'),
        meta:{
          title:'班级管理'
         
        }
      },
      {
        path: 'classroom',
        component: () => import('@/views/class/classroom'),
        name: 'classroom',
        meta:{
          title:'教室管理'
        }
        
      },
      {
        path: 'student',
        component: () => import('@/views/class/student'),
        name: 'itemlook',
        meta:{
          title:'学生管理'
        }
      }
    ]
}

export default classRoutes
