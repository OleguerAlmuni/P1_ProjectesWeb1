<script setup>
    import { ref } from 'vue'
</script>

<template>
    <header>
        <router-link to="/profile">
            <button> Profile </button>
        </router-link>

        <div>
            <h2>
                LV. 100
            </h2>
        </div>
        
        <div>
            <h2>
                Coins: 56745€
            </h2>
        </div>
        
    </header>

    <div class="first_row">
        <router-link to="/play">
            <button>Play</button>
        </router-link>
        <div class="small_buttons">
            <router-link to="/leaderboard">
                <button>List Players</button>
            </router-link>
            <router-link to="/gameHistory">
                <button>Game History</button>
            </router-link>
        </div>
    </div>

    <div class="second_row">
        <router-link to="/store">
            <button>Store</button>
        </router-link>
        <router-link to="/attacks">
            <button>Attacks</button>
        </router-link>
    </div>
</template>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
    }

        header button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            background: darkcyan;
            border-radius: 50%;
            width: 100px;
            height: 100px;
        }

        header div {
            background-color: darkcyan;
            height: 75px;
            width: 450px;
        }

    nav {
        padding: 10px;
    }

    .first_row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

        .first_row button {
            background-color: darkcyan;
            height: 250px;
            width: 990px;
        }

    .small_buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

        .small_buttons button {
            background-color: darkcyan;
            height: 120px;
            width: 120px;
        }

    .second_row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 20px;
    }

        .second_row button {
            background-color: darkcyan;
            height: 100px;
            width: 600px;
        }
    
</style>