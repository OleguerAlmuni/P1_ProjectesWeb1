import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../pages/LogIn.vue'

const routes = [
    {
        path: '/LogIn',
        name: 'LogIn',
        page: LogIn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router