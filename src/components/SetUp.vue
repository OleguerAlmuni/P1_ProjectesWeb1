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

    @media only screen and (min-width: 768px) {

        .div {
            width: 100%;
        }

    }

    h1 {
        display: flex;
        justify-content: center;
    }

    div {
        display: flex;
        justify-content: space-around;
        flex-direction:column;
        align-items:center;
        
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
        margin: 10px 10px 10px 10px;
    }

</style>