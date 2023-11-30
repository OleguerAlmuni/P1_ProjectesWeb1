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
    <br />
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

    @media only screen and (min-width: 768px) {
    }

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
        font-family: Inter,serif;
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
      margin-top: 20px;
      margin-right: 20px;
      margin-left: 450px;
      margin-bottom: 20px;
      padding: 80px;
        background: #23463f;
        border-radius: 15px;
    }

        .backpack h2 {
            display: flex;
            justify-content: center;
        }


    .click-button {
        font-family: Inter;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
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
        font-family: Inter;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        width: 90px;
        height: 90px;
    }

        .click-small-button:hover {
            background-color: #45a049;
        }

        .click-small-button:active {
            background-color: #3e8e41;
        }

    .horizontal-scroll {
        width: 100%; /* Ancho del contenedor */
        display: flex;
        flex-wrap: wrap;
        overflow-x: auto; /* Permite el scroll horizontal cuando el contenido es más ancho que el contenedor */
    }

    @media only screen and (min-width: 768px) {

        .column {
            width: 100%;
        }

        .center {
            width: 100%;
        }
    }
</style>