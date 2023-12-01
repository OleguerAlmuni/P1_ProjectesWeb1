<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
    import Table from '../components/Table.vue'
</script>

<template>
    <Header title="Play Game"></Header>
    <br />
    <div class="players">
        <section class="row">
            <div class="icon"></div>
            <section class="column">
                <h2>Player1</h2>
                <h2>HP: #00</h2>
            </section>
        </section>
        <div class="row-reverse">
            <section class="icon"></section>
            <section class="column">
                <h2>Player2</h2>
                <h2>HP: #00</h2>
            </section>
        </div>
    </div>
    <div class="container">
        <section class="column">
            <section class="container">
                <button class="click-button">Attack1</button>
            </section>
            <section class="container">
                <button class="click-button">Attack2</button>
            </section>
            <section class="container">
                <button class="click-button">Attack3</button>
            </section>
        </section>
        <Table></Table>
        <div class="column">
            <section class="container">
                <button class="click-button">Attack1</button>
            </section>
            <section class="container">
                <button class="click-button">Attack2</button>
            </section>
            <section class="container">
                <button class="click-button">Attack3</button>
            </section>
        </div>
    </div>
</template>


<style scoped>


    .players {
        display: flex;
        align-content: center;
        justify-content: space-evenly;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .row-reverse {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .icon {
        width: 70px;
        height: 70px;
        background-color: #4CAF50;
    }

    .container {
        display: flex;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 50px;
        padding-left: 50px;
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
        cursor: pointer;
        background: lightblue;
        border-radius: 50%;
        width: 120px;
        height: 120px;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }
</style>