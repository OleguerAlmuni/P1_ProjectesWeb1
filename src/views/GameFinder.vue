<script>
  import Header from "../components/Header.vue";

  export default {
    components: {Header},
    data()  {
      return {
        arenas: [],
        logs: [],
        finishedFilter: true,
        availableFilter: true,
      }
    },

    mounted() {
      fetch("https://balandrau.salle.url.edu/i3/arenas", {
        method: 'GET',
        headers: {
          'Bearer' : this.$root.token,
          'Content-Type' : "application/json"
        }
      }).then((response) => response.json())
          .then((res) => {
            if (res.error == undefined) {
              this.arenas = res;
            } else {
              console.log("Game Info ERROR!");
            }
          })
    },

    methods: {
      enterArena(game_ID) {
        fetch("https://balandrau.salle.url.edu/i3/arenas/" + game_ID + "/play", {
          method: 'POST',
          headers: {
            'Bearer' : this.$root.token,
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          if (response.ok) {
            this.$router.push('/playGame');
            return response;
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            console.log(res.error.message);
          }
        }).catch((error) => {
          console.log("No connection with API.");
        })
      },

      viewLogs(arena) {
        console.log(arena);
        this.$router.push({
          path: '/logs',
          query: {
            arena: JSON.stringify(arena)
          }
        })
      }
    }
  }


</script>

<template>
  <Header></Header>

  <main>
    <form>
      <label for="finished">Finished</label>
      <input type="checkbox" id="finished" name="finished" v-model="finishedFilter">

      <label for="available">Available</label>
      <input type="checkbox" id="available" name="available" v-model="availableFilter">
    </form>

    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>N.Squares</th>
        <th>HP</th>
        <th>Date</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="arena in this.arenas">
        <template v-if="finishedFilter && arena.finished">
          <td>{{arena.game_ID}}</td>
          <td>{{arena.size}}</td>
          <td>{{arena.HP_max}}</td>
          <td>{{arena.creation_date}}</td>
          <td v-if="!arena.start">
            <button v-on:click.prevent="enterArena(arena.game_ID)">JOIN</button>
          </td>
          <td v-else-if="arena.finished">
            <button v-on:click.prevent="viewLogs(arena)">View Logs</button>
          </td>
          <td v-else>
            <p>In progress</p>
          </td>
        </template>

        <template v-if="availableFilter && !arena.start">
          <td>{{arena.game_ID}}</td>
          <td>{{arena.size}}</td>
          <td>{{arena.HP_max}}</td>
          <td>{{arena.creation_date}}</td>
          <td v-if="!arena.start">
            <button v-on:click.prevent="enterArena(arena.game_ID)">JOIN</button>
          </td>
          <td v-else-if="arena.finished">
            <button v-on:click.prevent="viewLogs(arena)">View Logs</button>
          </td>
          <td v-else>
            <p>In progress</p>
          </td>
        </template>
      </tr>
      </tbody>

    </table>
  </main>
</template>

<style scoped>
  @media only screen and (min-width: 768px) {

  }

  main {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: row;
  }

  table {
    margin-top: 10px;
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