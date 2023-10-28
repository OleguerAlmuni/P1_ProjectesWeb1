import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/LogIn.vue'

const routes = [
    {
        path: '/LogIn',
        name: 'LogIn',
        page: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router