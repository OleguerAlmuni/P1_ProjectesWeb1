<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

</script>

<template>
    <Header />

    <nav>
        <button><router-link to="/login">Log</router-link></button>
    </nav>

    <router-view> </router-view>

    <Footer />
</template>


