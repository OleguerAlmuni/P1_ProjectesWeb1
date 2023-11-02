<script setup>
    import { ref } from 'vue'
    import Backpack from './Backpack.vue'
</script>

<template>
    <div class="container">
        <div class="left-container center">
            <h2>Create</h2>
            <Backpack></Backpack>
            <button type="button" class="click-button">Create for: 000,000</button>
        </div>
        <div class="right-container">
         
        </div>
    </div>
</template>


<style scoped>

    .container {
        display: flex;
        justify-content: space-around;
    }

    .left-content {
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .right-content {
        padding: 20px;
    }

    .spacing {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .center {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 70px;
        height: 70px;
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