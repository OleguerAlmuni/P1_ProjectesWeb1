
<script setup>
    import { ref } from 'vue'
    import Header from '../components/Header.vue'
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
    console.log("https://balandrau.salle.url.edu/i3/players/" + this.playerName);
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
      console.log(res);
      this.image = res.img;
      console.log(this.image);
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
    <Header title="Profile"></Header>
    <div class="components">
      <div class="left-components">
        <img :src="image" alt="Profile_Image">
      </div>
        <div class="right-components">
            <h2>Rank: #000</h2>
          <h2>Name: {{ playerName }}</h2>
          <h2>Level: {{ level }}</h2>
            <h2>XP: {{ xp }}</h2>
            <br />
            <nav>
                <router-link to="/gameHistory"><button class="game-history">Game History</button></router-link>
            </nav>
        </div>
    </div>
  <p>{{ response }}</p>
</template>

<style scoped>

    @media only screen and (min-width: 768px) {
        .left-components {
            width: 95%;
            height: 50%;
        }

        .right-components {
            width: 95%;
            height: 30%;
        }
    }

    .components {
        font-family: Inter;
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
        font-family: Inter;
        border-radius: 50%;
        width: 500px;
        height: 500px;
        background-color: #4CAF50;
        color: white;
    }
        .profile:hover {
            background-color: #45a049;
        }

        .profile:active {
            background-color: #3e8e41;
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
</style>