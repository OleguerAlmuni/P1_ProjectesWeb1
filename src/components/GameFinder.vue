<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="GameFinder"></Header>

    <div class="GameFinder">
        <div class="SearchBar">
            <input type="text" id="" name="" placeholder="Search">
        </div>

        <div class="Games">
            <table>
                <tr>
                    <th>ID</th>
                    <th>N.Squares</th>
                    <th>HP</th>
                    <th>State</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
                <tr>
                    <td>#000</td>
                    <td>#0x0</td>
                    <td>#00</td>
                    <td>Lorem</td>
                    <td>#dd/mm/yyyy</td>
                    <td>
                        <router-link to="/playGame"><button class="watch-game-button">Watch Game</button></router-link>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<style scoped>
    @media only screen and (min-width: 768px) {
        .SearchBar {
            width: 99%;
        }

        .Games {
            width: 99%;
        }
    }

    .SearchBar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 1%;
    }

    .Games {
        display: flex;
        justify-content: center;
    }

    table, th, td {
        font-family: Inter;
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }

    .watch-game-button {
        font-family: Inter;
        background-color: #4CAF50;
        color: white;
    }

        .watch-game-button:hover {
            background-color: #45a049;
        }

        .watch-game-button:active {
            background-color: #3e8e41;
        }
</style>