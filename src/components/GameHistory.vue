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
      games_played: 0,
      games_won: 0,
      player_games: [],
    }
  },
  beforeMount() {
    this.playerName = this.$root.player_ID;
  },
  mounted() {
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
      this.image = res.img;
      this.xp = res.xp;
      this.level = res.level;
      this.coins = res.coins;
    }).catch((error) => {
      this.response = "No connection with API";
    });

    fetch("https://balandrau.salle.url.edu/i3/players/statistics", {
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
      this.games_played = res.games_played;
      this.games_won = res.games_won;
    }).catch((error) => {
      this.response = "No connection with API";
    });

    fetch("https://balandrau.salle.url.edu/i3/players/games/finished", {
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
      if (res.error == undefined) {
        console.log("Information downloaded successfully.");
        //console.log("prova");
        this.player_games = res;
        //console.log(res);
        //console.log(this.player_games);
      }
      else {
        console.log("ERROR getting games played.");
      }
    }).catch((error) => {
      this.response = "No connection with API";
    });
  },
  methods: {
    getRival(p_games) {
      for (let i = 0; i < p_games.length; i++) {
        if (p_games[i].player_ID !== this.playerName) {
          return p_games[i].player_ID;
        }
      }
    },
    getWinner(p_games) {
      for (let i = 0; i < p_games.length; i++) {
        if (p_games[i].winner === true) {
          return p_games[i].player_ID;
        }
      }
    }
  }
}
</script>

<template>
    <Header title="Game History"></Header>
    <br />
    <div class="components">
        <div class="left-components">
            <div class="profile">
                <nav>
                    <router-link to="/profile"><img :src="image" alt="Profile_Image"></router-link>
                </nav>
            </div>
            <br />
            <div class="personalInfo">
                <p>Name: {{ playerName }}</p>
                <p>Level: #{{ level }}</p>
                <p>XP: #{{ xp }}</p>
            </div>
            <br />
            <div class="statistics">
                <p>Total Played: #{{ games_played }}</p>
                <p>Total Wins: #{{ games_won }}</p>
                <p>Wins%: {{ games_won/games_played * 100 }}%</p>
            </div>
        </div>
        <div class="right-components">
            <div class="resultTable">
                <table>
                  <thead></thead>
                    <tr>
                        <th>Date</th>
                        <th>VS</th>
                        <th>Winner</th>
                        <th>ID</th>
                    </tr>
                  <tbody>
                  <tr v-for="(gameX) in player_games">
                    <td>{{ gameX.creation_date }}</td>
                    <td>{{ getRival(gameX.players_games) }}</td>
                    <td>{{ getWinner(gameX.players_games) }}</td>
                    <td>{{ gameX.game_ID }}</td>
                  </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
    table, th, td {
        font-family: Inter;
        border: 1px solid;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }

    .resultTable {
        display: flex;
        justify-content: center;
    }

    .components {
        font-family: Inter;
        display: flex;
        justify-content: center;
    }

    .left-components {
        padding-right: 30%;
    }

    img {
      border-radius: 50%;
      max-height: 250px;
      max-width: 250px;
    }

    .circle {
        font-family: Inter;
        display: block;
        background-color: #4CAF50;
        color: white;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
        .circle:hover {
            background-color: #45a049;
        }

        .circle:active {
            background-color: #3e8e41;
        }
</style>