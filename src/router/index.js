import { createRouter, createWebHistory } from 'vue-router'
import Log from '../components/Log.vue'


const routes = [
    { path: '/login', component: Log },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

