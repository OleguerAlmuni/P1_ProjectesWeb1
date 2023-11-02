<script setup>
    import { ref } from 'vue'
</script>

<template>
    <div class="components">
        <div class="left-components">
            <nav>
                <router-link to="/createGame"><button class="create-game-button">Create Game</button></router-link>
            </nav>
            <router-view> </router-view>
        </div>
        <div class="right-components">
            <nav>
                <router-link to="/"><button class="available-games-button">Available Games</button></router-link>
            </nav>
            <router-view> </router-view>
            <br />
            <nav>
                <router-link to="/"><button class="game-finder-button">Game Finder</button></router-link>
            </nav>
            <router-view> </router-view>
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
        width: 400px;
        height: 620px;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
    }

    .available-games-button {
        width: 400px;
        height: 300px;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
    }

    .game-finder-button {
        width: 400px;
        height: 300px;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
    }
</style>