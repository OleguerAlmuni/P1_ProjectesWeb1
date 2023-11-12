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
        display: flex;
        justify-content: center;
    }

    .left-components {
        padding-right: 30%;
    }

    .circle {
        display: block;
        background: lightblue;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
</style>
<script>
    export default {
        props: {
            title: String,
        }
    }
</script>

<template>
    <div class="head">
        <div class="start">
            <button @click="$router.back()" class="click-button">Back</button>
            <h2>{{title}}</h2>
        </div>
        <div class="end">
            <div class="space-between">
                <div class="click-button">CoinIcon</div>
            </div>
            <div class="space-between">
                <h2>000,000</h2>
            </div>
            <div class="space-between">
                <router-link to="/attacks">
                    <div class="click-button">BackpackIcon</div>
                </router-link>
            </div>
            <router-link to="/home">
                <button class="click-button">Home</button>
            </router-link>
        </div>
    </div>
    <br />
</template>

<style scoped>


    .head {
        display: flex;
        justify-content: space-between;
    }

    .space-between {
        display: flex;
        padding-right: 20px;
        padding-left: 20px;
    }

    .start {
        font-family: Inter;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-left: 30px;
    }

        .start h2 {
            padding-left: 50px;
        }

    .end {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 30px;
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

    @media only screen and (min-width: 768px) {

        .head {
            width: 100%;
        }
    }
</style> 