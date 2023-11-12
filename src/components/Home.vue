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
                Coins: 56745$
            </h2>
        </div>

    </header>

    <div class="first_row">
        <router-link to="/play">
            <button class="play-button">Play</button>
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

    @media only screen and (min-width: 768px) {
        .first_row {
            width: 95%;
            height: 50%;
        }

        .second_row {
            width: 95%;
            height: 30%;
        }

        .play-button {
            width: 100%;
            height: 50%;
        }
    }

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
            .header button:hover {
                background-color: #45a049;
            }

            .header button:active {
                background-color: #3e8e41;
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
        justify-content: center;
        font-family: Inter;
    }

        .first_row button {
            background-color: #4CAF50;
            color: white;
            height: 100%;
            width: 1000px;
            font-family: Inter;
            margin-left: 30px;
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
        justify-content: center;
    }

        .small_buttons button {
            background-color: #4CAF50;
            color: white;
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
            font-family: Inter;
            background-color: #4CAF50;
            color: white;
            height: 100px;
            width: 600px;
        }

            .second_row button:hover {
                background-color: #45a049;
            }

            .second_row button:active {
                background-color: #3e8e41;
            }
</style>