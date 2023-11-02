<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Play from './components/Play.vue'

</script>

<template>
    <Header />

    <nav>
        <button><router-link to="/store">Store</router-link></button>
        <button><router-link to="/store/createAttack">CreateAttack</router-link></button>
        <button><router-link to="/leaderBoard">Leaderboard</router-link></button>
    </nav>

    <Play />

    <router-view> </router-view>

    <Footer />
</template>


