<script>
  import Header from "../components/Header.vue";

  export default {
    components: {Header},
    data()  {
      return {
        arenas: []
      }
    },

    // Before accessing this view we fetch the information regarding the Available Games in the API.
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
              for (let i in res) {
                if (res[i].start == false) {
                  this.arenas.push(res[i]);
                }
              }
              console.log("Game Info Loaded!")
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
      }
    }
  }
</script>

<template>
  <Header></Header>

  <main>
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
          <td>{{arena.game_ID}}</td>
          <td>{{arena.size}}</td>
          <td>{{arena.HP_max}}</td>
          <td>{{arena.creation_date}}</td>
          <td>
            <button v-on:click.prevent="enterArena(arena.game_ID)">JOIN</button>
          </td>
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
      background-color: #99ccff;
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

    thead {
      background-color: #77aaff;
      color: black;
    }

</style>