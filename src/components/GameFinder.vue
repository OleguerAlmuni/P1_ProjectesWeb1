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
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>
                        <nav>
                            <router-link to="/playGame"><button class="play-game">Watch Replay</button></router-link>
                        </nav>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>
                        <nav>
                            <router-link to="/playGame"><button class="play-game">Watch Replay</button></router-link>
                        </nav>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>
                        <nav>
                            <router-link to="/playGame"><button class="play-game">Watch Replay</button></router-link>
                        </nav>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>
                        <nav>
                            <router-link to="/playGame"><button class="play-game">Watch Replay</button></router-link>
                        </nav>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>
                        <nav>
                            <router-link to="/playGame"><button class="play-game">Watch Replay</button></router-link>
                        </nav>
                    </td>
                </tr>
                <tr>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>Ipsum</td>
                    <td>Lorem</td>
                    <td>
                        <nav>
                            <router-link to="/playGame"><button class="play-game">Watch Replay</button></router-link>
                        </nav>
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
        justify-content:center;
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

    .play-game {
        background-color: #4CAF50;
        color: white;
        font-family: Inter;
    }

        .play-game:hover {
            background-color: #45a049;
        }

        .play-game:active {
            background-color: #3e8e41;
        }

</style>