<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Profile from './components/Profile.vue'

</script>

<template>
    <Header />

    <nav>
        <button><router-link to="/store">Store</router-link></button>
        <button><router-link to="/store/createAttack">CreateAttack</router-link></button>
        <button><router-link to="/leaderBoard">Leaderboard</router-link></button>
    </nav>

    <Profile />

    <router-view> </router-view>

    <Footer />
</template>


