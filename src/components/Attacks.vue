<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Attacks"></Header>
    <br />
    <div class="column">
        <div class="container">
            <button class="click-button">Attack1</button>
        </div>
        <div class="container">
            <button class="click-button">Attack2</button>
        </div>
        <div class="container">
            <button class="click-button">Attack3</button>
        </div>
    </div>
    <br/>
    <div class="center">
        <div class="backpack">
            <div class="horizontal-scroll">
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
                <div class="container">
                    <button class="click-small-button">Attack3</button>
                </div>
            </div>
        </div>            
    </div>
</template>

<style scoped>

    .column {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .center {
        display: flex;
        justify-content: center;    
    }

    .container {
        padding: 30px;
    }

    .circle {
        background: lightblue;
        border-radius: 50%;
        width: 70px;
        height: 70px;
    }

    .backpack {
        width: 900px;
        height: 400px;
        overflow: hidden;
        margin: 20 20 20 450px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }

        .backpack h2 {
            display: flex;
            justify-content: center;
        }


    .click-button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        background: lightblue;
        border-radius: 50%;
        width: 150px;
        height: 150px;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }

    .click-small-button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        background: lightblue;
        border-radius: 50%;
        width: 90px;
        height: 90px;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }

    .horizontal-scroll {
        width: 100%; /* Ancho del contenedor */
        overflow-x: scroll; /* Permite el scroll horizontal cuando el contenido es más ancho que el contenedor */
    }

</style>