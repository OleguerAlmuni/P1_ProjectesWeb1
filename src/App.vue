<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header />

    <router-link to="/LogIn">LogIn</router-link>
    <router-link to "/CreateAccount">Create Account</router-link>

    <Footer />
</template>


