import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from "../views/StartScreen.vue";
import Home from '../components/Home.vue'
import SetUp from '../components/SetUp.vue'
import LoginView from '../views/LoginView.vue'
import Store from '../components/Store.vue'
import CreateAttack from '../components/CreateAttack.vue'
import Leaderboard from '../components/Leaderboard.vue'
import GameFinder from '../components/GameFinder.vue'
import AvailableGames from '../components/AvailableGames.vue'
import BuyAttack from '../components/BuyAttack.vue'
import Attacks from '../components/Attacks.vue'
import PlayGame from '../components/PlayGame.vue'
import GameHistory from '../components/GameHistory.vue'
import Profile from '../components/Profile.vue'
import Play from '../components/Play.vue'
import SellAttack from '../components/SellAttack.vue'
import RegisterView from "../views/RegisterView.vue"
import CreateArena from "../components/CreateArena.vue"
import Attack from "../components/Attack.vue"


const routes = [
    { path: '/', component: SetUp },
    { path: '/home', component: Home },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/store', component: Store },
    { path: '/store/createAttack', component: CreateAttack },
    { path: '/leaderBoard', component: Leaderboard },
    { path: '/store/buyAttack', component: BuyAttack },
    { path: '/attacks', component: Attacks },
    { path: '/playGame', component: PlayGame },
    { path: '/createArena', component: CreateArena },
    { path: '/availableGames', component: AvailableGames },
    { path: '/gameFinder', component: GameFinder },
    { path: '/gameHistory', component: GameHistory },
    { path: '/profile', component: Profile },
    { path: '/play', component: Play },
    { path: '/store/sellAttack', component: SellAttack },
    { path: '/attacks/attack', name: 'attack', component: Attack },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

