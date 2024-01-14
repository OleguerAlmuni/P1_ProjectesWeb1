<script>
import Header from '../components/Header.vue'
export default {
  components: {Header},
  data() {
    return {
      arena: JSON.parse(this.$route.query.arena),
      logs: []
    }
  },

  mounted() {
    fetch("https://balandrau.salle.url.edu/i3/arenas/" + this.arena.game_ID + "/logs", {
      method: 'GET',
      headers: {
        'Bearer' : this.$root.token,
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
        .then((res) => {
          if (res.error == undefined) {
            this.logs = res;
          } else {
            console.log("Game Info ERROR!");
          }
        })
  }
}
</script>

<template>
  <Header></Header>

  <main>
    <table>
      <thead>
      <tr>
        <th>Description</th>
        <th>Time</th>
        <th>Player</th>
      </tr>
      </thead>

      <tbody>
        <tr v-for="log in this.logs">
          <td>{{ log.description }}</td>
          <td>{{ log.date_time }}</td>
          <td>{{ log.player_ID }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    margin-top: 10px;
  }

  table {
    margin-left: auto;
    margin-right: auto;
  }

  table, th, td {
    color: black;
    border: 1px solid;
    border-collapse: collapse;
  }

  th, td {
    text-align: center;
    padding: 15px;
  }
</style>