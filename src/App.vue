<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

</script>

<template>
    <Header />

    <nav>
        <button><router-link to="/store">Store</router-link></button>
        <button><router-link to="/store/createAttack">CreateAttack</router-link></button>
    </nav>

    <router-view> </router-view>

    <Footer />
</template>


