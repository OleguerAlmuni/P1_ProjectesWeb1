import { createRouter, createWebHistory } from 'vue-router'
import Log from '../components/Log.vue'
import CreateAccount from '../components/CreateAccount.vue'
import Store from '../components/Store.vue'
import CreateAttack from '../components/CreateAttack.vue'
import Leaderboard from '../components/Leaderboard.vue'
import BuyAttack from '../components/BuyAttack.vue'
import BackPack from '../components/BackPack.vue'
import PlayGame from '../components/PlayGame.vue'
import CreateGame from '../components/createGame.vue'


const routes = [
    { path: '/login', component: Log },
    { path: '/createAccount', component: CreateAccount },
    { path: '/store', component: Store },
    { path: '/store/createAttack', component: CreateAttack },
    { path: '/createAccount', component: CreateAccount },
    { path: '/leaderBoard', component: Leaderboard },
    { path: '/store/buyAttack', component: BuyAttack },
    { path: '/backpack', component: BackPack },
    { path: '/playGame', component: PlayGame },
    { path: '/createGame', component: CreateGame },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

