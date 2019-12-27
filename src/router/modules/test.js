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
        path: '/Addexam',
        component: () => import('@/views/exam/Addexam'),
        name: 'AddExam',
        meta: { title: '添加考试', icon: 'guide', noCache: true },
      },
      {
        path: '/Listexam',
        component: () => import('@/views/exam/Listexam'),
        name: 'ListExam',
        meta: { title: '试卷列表', icon: 'guide', noCache: true },
      },
      {
        path: '/Addexam/Addedit',
        component: () => import('@/views/exam/Addedit'),
        name: 'Addedit',
      },
      {
        path: '/Detail',
        component: () => import('@/views/exam/Detail'),
        name: 'Detail',
      }
    ]
}

export default testRoutes
