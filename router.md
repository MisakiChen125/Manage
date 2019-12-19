export const asyncRoutes = [
  {
    path: '/itemmanage',
    component: Layout,
    redirect: '/itemmanage/add',
    alwaysShow: true, 
    name: 'itemmanage',
    meta: {
      title: '考试管理',
      icon: 'lock',
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
        component: () => import('@views/itemmanage/itemlook'),
        name: 'itemlook',
        meta:{
          title:'查看试卷'
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  }