<script setup>
    import Header from './components/Header.vue'
    import Welcome from './components/Welcome.vue'
    import WatchGames from './components/WatchGames.vue'
    import Footer from './components/Footer.vue'

</script>

<template>
    <Header />
    <Welcome />
    <WatchGames />
    <router-view> </router-view>

    <Footer />
</template>


