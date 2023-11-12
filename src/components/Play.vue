<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title=""></Header>
    <br />
    <div class="components">
        <div class="left-components">
            <nav>
                <router-link to="/createGame"><button class="create-game-button">Create Game</button></router-link>
            </nav>
        </div>
        <div class="right-components">
            <nav>
                <router-link to="/availableGames"><button class="available-games-button">Available Games</button></router-link>
            </nav>
            <br />
            <nav>
                <router-link to="/gameFinder"><button class="game-finder-button">Game Finder</button></router-link>
            </nav>
        </div>
    </div>
</template>

<style scoped>
    .components {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .left-components {
        display: flex;
        justify-content: center;
        align-content: center;
        padding-right: 5%;
    }
    .right-components {
        padding-left: 5%;
    }
    .create-game-button {
        background-color: #4CAF50;
        color: white;
        width: 400px;
        height: 620px;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
    }

    .available-games-button {
        background-color: #4CAF50;
        color: white;
        width: 400px;
        height: 300px;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
    }

    .game-finder-button {
        background-color: #4CAF50;
        color: white;
        width: 400px;
        height: 300px;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
    }
        .game-finder-button:hover {
            background-color: #45a049;
        }

        .game-finder-button:active {
            background-color: #3e8e41;
        }

    @media only screen and (min-width: 768px) {
        .components {
            width: 100%;
        }
    }

</style>