<script setup>
    import { ref } from 'vue'
</script>

<template>
    <h1>Game Title</h1>
    <div>
        <router-link to="/createAccount">
            <button>Sign Up</button>
        </router-link>
        <router-link to="/login">
            <button>Log In</button>
        </router-link>
    </div>
</template>

<style scoped>
    h1 {
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    button {
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>