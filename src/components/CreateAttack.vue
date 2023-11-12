<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
    import Table from '../components/Table.vue'
</script>

<template>
    <Header title="CreateAttack"></Header>
    <br/>
    <div class="container">
        <div class="left-container center">
            <h2>Create</h2>
            <button type="button" class="click-button">Create for: 000,000</button>
        </div>
        <div class="right-container">
            <Table></Table>
        </div>
    </div>
</template>


<style scoped>

    .container {
        font-family: Inter;
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