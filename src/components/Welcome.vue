<script setup>
    import { ref } from 'vue'
</script>

<template>
    <h1> Game Title </h1>

    <nav>
        <button>
            <router-link to="/login"> Log In </router-link>
        </button>
    </nav>

    <router-view></router-view>
</template>

<style scoped>
    h1 {
        display: flex;
        justify-content: center;
    }

</style>