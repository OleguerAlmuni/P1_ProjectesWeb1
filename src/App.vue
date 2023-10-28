<script setup>
    import Log from '../pages/Log.vue'
</script>

<template>
    <Header />

    <nav>
        <router-link to="/LogIn">LogIn</router-link>
    </nav>

    <Footer />
    <router-view> </router-view>
</template>


