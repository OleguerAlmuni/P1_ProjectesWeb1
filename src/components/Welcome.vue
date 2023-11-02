<script setup>
    import { ref } from 'vue'
</script>

<template>
    <h1> Game Title </h1>

    <nav>
        <router-link to="/login">
            <button> login </button>
        </router-link>
    </nav>

    
</template>

<style scoped>
    h1 {
        display: flex;
        justify-content: center;
    }

</style>