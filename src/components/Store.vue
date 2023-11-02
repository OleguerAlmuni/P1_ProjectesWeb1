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
        <router-link to="/playGame">
            <button class="click-big-button"><h1>Buy</h1></button>
        </router-link>
            <button class="click-big-button"><h1>Sell</h1></button>
</div>
</template>

<style scoped>


    .body-store {
        display: flex;
        justify-content: space-evenly;
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
        flex-shrink: 0;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

</style> 