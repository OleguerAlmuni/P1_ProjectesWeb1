<script>
  import Header from "../components/Header.vue";
  export default {
    components: {Header},
    data() {
      return {
        players : [],
        search: "",
        response: ""
      }
    },
    created() {
      fetch("https://balandrau.salle.url.edu/i3/players/" , {
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
        //Obtiene las estadísticas de todos los jugadores a través de la API.
        res.forEach((player) => {
          fetch("https://balandrau.salle.url.edu/i3/players/" + player.player_ID + "/statistics", {
            method: 'GET',
            headers: {
              'Bearer' : this.$root.token,
              'Content-Type': 'application/json'
            }
          }).then((response) => response.json())
              .then((res) => {
                if (res.error == undefined) {
                  console.log("Statistics OK!");
                  this.players.push({ player_ID: player.player_ID, level: player.level, xp: player.xp, games_won: res.games_won});
                } else {
                  console.log("ERROR getting statistics.");
                }
              })
        })
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },

    updated() {
      this.players.sort((a, b) => b.games_won - a.games_won);
    }
  }
</script>

<template>
  <Header></Header>

  <main>
    <input type="Search" id="Search" name="Search" placeholder="Search" v-model="search">

    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Level</th>
          <th>XP</th>
          <th>Victories</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(playerX, index) in players">
          <template v-if="search == ''">
            <td>#{{index + 1}}</td>
            <td>{{ playerX.player_ID }}</td>
            <td>{{ playerX.level }}</td>
            <td>{{ playerX.xp }}</td>
            <td>{{ playerX.games_won }}</td>
          </template>

          <!--busca en la lista de jugadores aquellos que contienen en su nombre los caracteres introducidos por el usuario-->
          <template v-else-if="playerX.player_ID.includes(search)">
            <td>#{{index + 1}}</td>
            <td>{{ playerX.player_ID }}</td>
            <td>{{ playerX.level }}</td>
            <td>{{ playerX.xp }}</td>
            <td>{{ playerX.games_won }}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    input {
      width: 42%;
      margin-right: auto;
      margin-left: auto;
    }

    table {
      margin-left: auto;
      margin-right: auto;
    }
  }

    main {
      display: flex;
      flex-direction: column;
      color: black;
      margin-top: 10px;
    }

    table {
      margin-top: 10px;
      background-color: #99ccff;
    }

    thead {
      background-color: #77aaff;
      color: black;
    }

    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }

    th, td {
        text-align: center;
        padding: 15px;
    }


</style>