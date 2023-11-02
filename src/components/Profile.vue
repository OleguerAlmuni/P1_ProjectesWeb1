<script setup>
    import { ref } from 'vue'
</script>

<template>
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
    .profile {
        border-radius: 50%;
        width: 500px;
        height: 500px;
    }

    .game-history {
        width: 300px;
        height: 150px;
        font-size: 46px;
    }
</style>