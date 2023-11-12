<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
</script>

<template>
    <Header title="Profile"></Header>
    <div class="components">
        <div class="left-components">
            <nav>
                <button class="profile">Profile Picture</button>
            </nav>
            <router-view> </router-view>
        </div> 
        <div class="right-components">
            <h2>Rank: #000</h2>
            <h2>Name: Lorem Ipsum</h2>
            <h2>Level: #00</h2>
            <h2>XP: #000</h2>
            <br />
            <nav>
                <router-link to="/gameHistory"><button class="game-history">Game History</button></router-link>
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
        font-family: Inter;
        padding-left: 5%;
    }
    .profile {
        font-family: Inter;
        border-radius: 50%;
        width: 500px;
        height: 500px;
        background-color: #4CAF50;
        color: white;
    }

    .game-history {
        font-family: Inter;
        width: 300px;
        height: 150px;
        font-size: 46px;
        background-color: #4CAF50;
        color: white;
    }
    .game-history:hover {
        background-color: #45a049;
    }

    .game-history:active {
        background-color: #3e8e41;
    }

    @media only screen and (min-width: 768px) {

        .components {
            width: 100%;
        }

    }
</style>