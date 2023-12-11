<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
    import Table from '../components/Table.vue'
</script>

<template>
    <Header title="Create Game"></Header>
    <br />
    <div class="center">
        <div class="panel">
            <div class="column">
                <label for="nSquares">Squares</label>
                <select name="nSquares" id="nSquare">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <label for="HP2">HP</label>
                <input type="number" id="HP" name="HP2" placeholder="10-100">
                <router-link to="/playGame"><button class="click-button">Create Game!</button></router-link>
            </div>
            <Table></Table>
        </div>
    </div>
</template>


<style scoped>

    .center {
        font-family: Inter;
        display: flex;
        justify-content: center;
    }

    .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .panel {
        width: 900px;
        height: 400px;
        margin: 20px;
        padding: 80px;
        background: #23463f;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .backpack h2 {
        display: flex;
        justify-content: center;
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
        font-family: Inter;
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