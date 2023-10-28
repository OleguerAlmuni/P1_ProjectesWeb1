<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header />

    <nav>
        <router-link to="/login">Log</router-link>
    </nav>

    <router-view></router-view>

    <Footer />
</template>


