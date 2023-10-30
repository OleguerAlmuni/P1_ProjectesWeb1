import { createRouter, createWebHistory } from 'vue-router'
import Log from '../components/Log.vue'
import CreateAccount from '../components/CreateAccount.vue'
import Leaderboard from '../components/Leaderboard.vue'


const routes = [
    { path: '/login', component: Log },
    { path: '/createAccount', component: CreateAccount },
    { path: '/leaderBoard', component: Leaderboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

