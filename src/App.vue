<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import CreateAccount from './components/CreateAccount.vue'
    import Home from './components/Home.vue'

</script>

<template>
    <Header />

    <CreateAccount />
    <Home />

    <nav>
        <button><router-link to="/login">Log</router-link></button>
    </nav>

    <router-view> </router-view>

    <Footer />
</template>


