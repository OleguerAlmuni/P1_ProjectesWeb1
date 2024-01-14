import { createRouter, createWebHistory } from 'vue-router'
import StartScreen from "../views/StartScreen.vue";
import Home from '../views/Home.vue'
import LoginView from '../views/LoginView.vue'
import Store from '../views/Store.vue'
import CreateAttack from '../views/CreateAttack.vue'
import Leaderboard from '../views/Leaderboard.vue'
import GameFinder from '../components/GameFinder.vue'
import AvailableGames from '../views/AvailableGames.vue'
import BuyAttack from '../views/BuyAttack.vue'
import Attacks from '../views/Attacks.vue'
import PlayGame from '../components/PlayGame.vue'
import GameHistory from '../views/GameHistory.vue'
import Profile from '../components/Profile.vue'
import Play from '../views/Play.vue'
import RegisterView from "../views/RegisterView.vue"
import CreateArena from "../views/CreateArena.vue"
import Attack from "../components/Attack.vue"


const routes = [
    { path: '/', component: StartScreen },
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
    { path: '/attacks/attack', name: 'attack', component: Attack },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

