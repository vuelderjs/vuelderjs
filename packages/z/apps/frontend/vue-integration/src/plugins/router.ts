import { createRouter, createWebHistory } from 'vue-router'
import { routes as userRoutes } from '@vuelder.js/users-frontend/vue'
import baseRoutes from '../modules/base/routes'
import BaseConfiguration from '@/modules/base/core/BaseConfiguration'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...userRoutes,
        ...baseRoutes
    ]
})

router.beforeEach(async (to, from, next) => {
    await BaseConfiguration.fetchConfigurations()
    next()
})