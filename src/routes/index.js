import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import websiteLayout from '@/application/layout/websiteLayout'
import dashboardLayout from '@/application/layout/dashboardLayout'
import userLayout from '@/application/layout/UserLayout'

const routes = [
    {
        path: '/',
        name: 'frontPage',
        component: () => import('@/application/website/frontPage'),
        meta: { layout: websiteLayout }
    },
    {
        path: '/portfolio',
        name: 'PortfolioPage',
        component: () => import('@/application/website/PortfolioPage'),
        meta: { layout: websiteLayout }
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: () => import('@/application/website/ContactPage'),
        meta: { layout: websiteLayout }
    },
    {
        path: '/jh-login',
        name: 'loginPage',
        component: () => import('@/application/auth/loginPage'),
        meta: { layout: websiteLayout }
    },
    {
        path: '/home',
        name: 'homePage',
        component: () => import('@/application/user/HomePage'),
        meta: { layout: userLayout, requiresAuth: true }
    },
    {
        path: '/dashboard',
        name: 'dashboardPage',
        component: () => import('@/application/dashboard/dashboardPage'),
        meta: { layout: dashboardLayout, requiresAuth: true }
    },
    {
        path: '/:pathmatch(.*)*',
        name: 'notFound',
        component: () => import('@/application/notFound/notFound'),
        meta: { layout: websiteLayout }
    }
]

var router = createRouter({
    history: createWebHistory('/'),
    routes
})


function isLoggedIn()
{
    return !localStorage.getItem('token')
}

router.beforeEach((to, from, next) => {
   if(to.matched.some(record => record.meta.requiresAuth)) {
     if(!isLoggedIn()) {
        next({
            name: 'frontPage'
        })
     } else {
        next()
     }
   } else if(to.matched.some(record => record.meta.isAuthenticated)) {
     if(isLoggedIn()) {
        next({
            name: 'dashboardPage'
        })
     } else {
        next()
     }
   } else {
     next()
   }
})

export default router