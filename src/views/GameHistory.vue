<script>
import Header from '../components/Header.vue'
export default {
  components: {Header},
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
        this.player_games = res;
      }
      else {
        console.log("ERROR getting games played.");
      }
    }).catch((error) => {
      this.response = "No connection with API";
    });
  },

  /*
  Los métodos sirven para obtener la información sobre los rivales de las partidas
  finalizadas y quien fué el vencedor.
   */
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
    <Header></Header>

    <main>
      <section class="profile">
        <h1>{{ playerName }}</h1>
        <h3>Level: #{{ level }}</h3>
        <h3>XP: #{{ xp }}</h3>
        <h3>Total Played: #{{ games_played }}</h3>
        <h3>Total Wins: #{{ games_won }}</h3>
        <h3>Wins%: {{ games_won/games_played * 100 }}%</h3>
      </section>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>VS</th>
            <th>Winner</th>
            <th>ID</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(gameX) in player_games">
            <td>{{ gameX.creation_date }}</td>
            <td>{{ getRival(gameX.players_games) }}</td>
            <td>{{ getWinner(gameX.players_games) }}</td>
            <td>{{ gameX.game_ID }}</td>
          </tr>
        </tbody>
      </table>

    </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    main {
      display: flex;
    }

    .profile {
      max-width: 30%;
    }

    table {
      margin-top: 10px;
    }
  }

  main {
    margin-top: 10px;
    color: black;
    background-color: #99ccff;
    border: 5px solid black;
    border-radius: 8px;
    overflow-x: auto;
  }

  .profile {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-right: auto;
    color: black;
    background-color: #99ccff;
  }

  table {
    margin-right: 10px;
    background-color: #99ccff;
    margin-left: 10px;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  th, td {
    text-align: center;
    padding: 15px;
  }

  thead {
    background-color: #77aaff;
    color: black;
  }
  
</style>