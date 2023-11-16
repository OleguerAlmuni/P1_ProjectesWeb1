<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Game History"></Header>
    <br />
    <div class="components">
        <div class="left-components">
            <div class="profile">
                <nav>
                    <router-link to="/profile"><button class="circle">Profile</button></router-link>
                </nav>
            </div>
            <br />
            <div class="personalInfo">
                <p>Rank: #000</p>
                <p>Name: Lorem Ipsum</p>
                <p>Level: #00</p>
                <p>XP: #000</p>
            </div>
            <br />
            <div class="statistics">
                <p>Total Played: #000</p>
                <p>Total Wins: #000</p>
                <p>Wins%: 000%</p>
            </div>
        </div>
        <div class="right-components">
            <div class="resultTable">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>VS</th>
                        <th>Result</th>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                    <tr>
                        <td>#dd/mm/yyyy</td>
                        <td>#LoremIpsum</td>
                        <td>#Lorem</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
    table, th, td {
        font-family: Inter;
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }

    .resultTable {
        display: flex;
        justify-content: center;
    }

    .components {
        font-family: Inter;
        display: flex;
        justify-content: center;
    }

    .left-components {
        padding-right: 30%;
    }

    .circle {
        font-family: Inter;
        display: block;
        background-color: #4CAF50;
        color: white;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
        .circle:hover {
            background-color: #45a049;
        }

        .circle:active {
            background-color: #3e8e41;
        }
</style>