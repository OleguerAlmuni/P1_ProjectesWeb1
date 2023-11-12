import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SetUp from '../components/SetUp.vue'
import Log from '../components/Log.vue'
import CreateAccount from '../components/CreateAccount.vue'
import Store from '../components/Store.vue'
import CreateAttack from '../components/CreateAttack.vue'
import Leaderboard from '../components/Leaderboard.vue'
import WatchGames from '../components/WatchGames.vue'
import BuyAttack from '../components/BuyAttack.vue'
import Attacks from '../components/Attacks.vue'
import PlayGame from '../components/PlayGame.vue'
import CreateGame from '../components/createGame.vue'
import GameHistory from '../components/GameHistory.vue'
import Profile from '../components/Profile.vue'
import Play from '../components/Play.vue'
import SellAttack from '../components/SellAttack.vue'


const routes = [
    { path: '/', component: SetUp },
    { path: '/home', component: Home },
    { path: '/login', component: Log },
    { path: '/createAccount', component: CreateAccount },
    { path: '/store', component: Store },
    { path: '/store/createAttack', component: CreateAttack },
    { path: '/createAccount', component: CreateAccount },
    { path: '/leaderBoard', component: Leaderboard },
    { path: '/store/buyAttack', component: BuyAttack },
    { path: '/attacks', component: Attacks },
    { path: '/playGame', component: PlayGame },
    { path: '/createGame', component: CreateGame },
    { path: '/watchGames', component: WatchGames },
    { path: '/gameHistory', component: GameHistory },
    { path: '/profile', component: Profile },
    { path: '/play', component: Play },
    { path: '/store/sellAttack', component: SellAttack },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

