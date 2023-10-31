<script setup>
    import { ref } from 'vue'
</script>

<template>
    <div class="store">
        <button type="button" class="click-button">Create</button>
        <button type="button" class="click-button">Buy</button>
        <button type="button" class="click-button">Sell</button>
    </div>
    <br />
    <div class="backpack">
        <div class="spacing">
            <button type="button" class="circle">1</button>
            <h2>My attacks</h2>
            <button type="button" class="circle">1</button>
        </div>
        <div class="spacing">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <br />
        <div class="spacing">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <br />
        <div class="spacing">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<style scoped>

    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    .backpack {
        width: 382px;
        overflow: hidden;
        margin: auto;
        margin: 20 0 0 450px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }

    .spacing {
        display: flex;
        justify-content:space-between;
        flex-direction: row;
    }


    .backpack h2 {
        display:flex;
        justify-content:center;
    }
    .store {
        display:flex;
        justify-content: space-around;
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

        .circle {

        }
    
</style> 
