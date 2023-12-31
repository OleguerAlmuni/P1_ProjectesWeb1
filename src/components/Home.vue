<script setup>
    import { ref } from 'vue'
</script>

<script>
export default {
  data() {
    return {
      playerName: "",
      image: "",
      xp: 0,
      level: 0,
      coins: 0,
      response: "",
    }
  },
  beforeMount() {
    this.playerName = this.$root.player_ID;
  },
  mounted() {
    //console.log("https://balandrau.salle.url.edu/i3/players/" + this.playerName);
    fetch("https://balandrau.salle.url.edu/i3/players/" + this.playerName, {
      method: 'GET',
      headers: {
        'Bearer': this.$root.token,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        this.response = "Information downloaded successfully.";
      }
      return response.json();
    }).then((res) => {
      console.log("Information downloaded successfully.");
      //console.log(res);
      this.image = res.img;
      //console.log(this.image);
      this.xp = res.xp;
      this.level = res.level;
      this.coins = res.coins;
    }).catch((error) => {
      this.response = "No connection with API";
    });
  },
}
</script>
<template>
    <header>
        <router-link to="/profile">
            <img :src="image" alt="Profile_Image">
        </router-link>

        <div>
            <h2>
                LV. {{ level }}
            </h2>
        </div>

        <div>
            <h2>
                Coins: {{ coins }}
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

    img {
      border-radius: 50%;
      max-height: 100px;
      max-width: 100px;
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