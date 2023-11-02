<script setup>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

</script>

<template>

    <nav>
        <button><router-link to="/store">Store2</router-link></button>
        <button><router-link to="/backpack">BackPack2</router-link></button>
        <button><router-link to="/createGame">CreateGame</router-link></button>
    </nav>

    <router-view></router-view>

</template>


