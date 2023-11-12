<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Store"></Header>
    <br />
    <div class="body-store">
        <router-link to="/store/createAttack">
            <button class="click-big-button"><h1>Create</h1></button>
        </router-link>
        <router-link to="/store/buyAttack">
            <button class="click-big-button"><h1>Buy</h1></button>
        </router-link>
        <router-link to="/store/sellAttack">
            <button class="click-big-button"><h1>Sell</h1></button>
        </router-link>
    </div>
</template>

<style scoped>


    .body-store {
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }

        .body-store h1 {
            text-align: center;
            font-family: Inter;
            font-size: 64px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

    .click-big-button {
        width: 260px;
        height: 580px;
        background-color: #4CAF50;
        color: white;
        flex-shrink: 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
        .click-big-button:hover {
            background-color: #45a049;
        }

        .click-big-button:active {
            background-color: #3e8e41;
        }

    @media only screen and (min-width: 768px) {

        .body-store {
            display: flex;
            width: 100%;
            flex-direction: row;
        }
    }
</style> 