<script setup>
    import Header from './components/Header.vue'
    import Log from './components/Log.vue'
    import CreateAccount from './components/CreateAccount.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header />

    <title>GAME TITLE</title>
    <router-link to="/LogIn">LogIn</router-link>
    <router-link to "/CreateAccount">Create Account</router-link>

    <Footer />
</template>


