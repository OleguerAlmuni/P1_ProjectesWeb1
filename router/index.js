import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/LogIn.vue'

const routes = [
    {
        path: '/LogIn',
        name: 'LogIn',
        page: Login
    },
    {
        path: '/LeaderBoard',
        name: ''
    }
    {
        path: '/CreateAccount',
        name: 'Create an account',
        page: Creation, /*Aquesta última coma es posa a final de l'array*/
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router