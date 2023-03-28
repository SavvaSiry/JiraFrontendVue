// Composable
import {createRouter, createWebHistory} from 'vue-router'
import ProjectList from "@/components/project/ProjectList";
import MainPage from "@/components/pages/MainPage";

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/home',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Ya',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/pages/YaTest.vue'),
      },
    ]
  },
  {
    path: '/main',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Main',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/pages/MainPage.vue'),
      },
    ]
  },
  {
    path: '/projects',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        props: true,
        component: () => import(/* webpackChunkName: "home" */ '@/components/project/ProjectList.vue')
      }
    ]
  },
  {
    path: '/projects/:id',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        props: true,
        component: () => import(/* webpackChunkName: "home" */ '@/components/pages/MainPage.vue'),
      }
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
