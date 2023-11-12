<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header></Header>
    <h1>Game Title</h1>
    <div class="createAccount">
        <h2>Create Account</h2>
        <label for="Name"></label>
        <input type="text" id="Name" name="Name" placeholder="Email">
        <br><br>
        <label for="Name"></label>
        <input type="text" id="Name" name="Name" placeholder="Password">
        <br><br>
        <div class="flex-component">
            <router-link to="/home">
                <button type="button" class="click-button">LogIn</button>
            </router-link>
        </div>
    </div>
    <br>
</template>

<style scoped>

    h1 {
        display: flex;
        justify-content: center;
    }

    .read-the-docs {
        color: #888;
    }

    .createAccount {
        width: 382px;
        overflow: hidden;
        margin: auto;
        margin: 20 0 0 450px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }

        .login h2 {
            text-align: center;
        }

        .login button {
            justify-content: center;
        }

    .flex-component {
        display: flex;
        justify-content: center;
    }

        .flex-component.left {
            justify-content: left;
        }

        .flex-component.right {
            justify-content: right;
        }

    .click-button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }
</style>