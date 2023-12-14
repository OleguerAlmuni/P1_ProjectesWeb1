<script setup>
    import { ref } from 'vue'
</script>

<template>
    <h1>Game Title</h1>
    <div>
        <router-link to="/register">
            <button>Sign Up</button>
        </router-link>
        <router-link to="/login">
            <button>Log In</button>
        </router-link>
    </div>
</template>

<style scoped>
    h1 {
        font-family: Inter;
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }

    button {
        font-family: Inter;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 10px 10px 10px 10px;
    }
        button:hover {
            background-color: #45a049;
        }

        button:active {
            background-color: #3e8e41;
        }
</style>