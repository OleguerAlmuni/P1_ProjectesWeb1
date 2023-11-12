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
        font-family: Inter;
    }

        header button {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            font-family: Inter;
        }

        header div {
            background-color: #4CAF50;
            color: white;
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
            background-color: #4CAF50;
            color: white;
            height: 100%;
            width: 3000%;
            font-family: Inter;
        }
            .first_row button:hover {
                background-color: #45a049;
            }

            .first_row button:active {
                background-color: #3e8e41;
            }

    .small_buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: Inter;
    }

        .small_buttons button {
            background-color: #4CAF50;
            color: white;
            height: 120px;
            width: 120px;
        }
            .small_buttons button:hover {
                background-color: #45a049;
            }

            .small_buttons button:active {
                background-color: #3e8e41;
            }

    .second_row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 20px;
    }

        .second_row button {
            background-color: #4CAF50;
            color: white;
            height: 100px;
            width: 600px;
            font-family: Inter;
        }
            .second_row button:hover {
                background-color: #45a049;
            }

            .second_row button:active {
                background-color: #3e8e41;
            }
    
</style>