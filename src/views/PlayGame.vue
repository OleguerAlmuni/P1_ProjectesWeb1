<script>
export default {
  data() {
    return {
      game_ID: "",
      size: 0,
      creation_date: "",
      finished: false,
      HP_max: 0,
      start: true,
      players: [],
      attacks: [],
      timer: null,
      res: "",
    }
  },
  beforeMount() {

    /*
    This first fetch is to load the player's current game, as it is the only game that
    they can play.
     */
    fetch("https://balandrau.salle.url.edu/i3/players/arenas/current", {
      method: 'GET',
      headers: {
        'Bearer' : this.$root.token,
        'Content-Type' : "application/json"
      }
    }).then((response) => response.json())
        .then((res) => {
          if (res.error == undefined) {
            let game = res[0];
            this.game_ID = game.game_ID;
            this.size = game.size - 1;
            this.creation_date = game.creation_date;
            this.finished = game.finished;
            this.HP_max = game.HP_max;
            this.start = game.start;
            this.players = game.players_games;

            console.log("Game Info Loaded!");

            // Here we fetch the equipped attacks from player 1 (the user) and store them for easier access.
            fetch("https://balandrau.salle.url.edu/i3/players/attacks", {
              method: 'GET',
              headers: {
                'Bearer' : this.$root.token,
                'Content-Type' : "application/json"
              }
            }).then((response) => response.json())
                .then((res) => {
                  if (res.error == undefined) {
                    this.getEquippedAttacks(res, this.attacks);
                  } else {
                    console.log("Load attacks 1 ERROR!");
                  }
                })
          } else {
            console.log("Game Info ERROR!");
          }
        })
  },
  mounted() {
      this.timer = setInterval(() => {
        fetch("https://balandrau.salle.url.edu/i3/players/arenas/current", {
          method: 'GET',
          headers: {
            'Bearer' : this.$root.token,
            'Content-Type' : "application/json"
          }
        }).then((response) => response.json())
            .then((res) => {
              if (res.error == undefined) {
                let game = res[0];
                this.game_ID = game.game_ID;
                this.size = game.size;
                this.creation_date = game.creation_date;
                this.finished = game.finished;
                this.HP_max = game.HP_max;
                this.start = game.start;
                this.players = game.players_games;
              }
            })
      }, 5000)
  },

  beforeUnmount() {
    clearInterval(this.timer);
    this.attacks = null;
  },

  methods: {
    getEquippedAttacks(attack_array, equipped_attacks) {
      attack_array.forEach((attack) => {
        if (attack.equipped == true) {
          equipped_attacks.push(attack);
        }
      })
    },

    move(direction) {
      const movementRequest = { movement: direction };
      fetch("https://balandrau.salle.url.edu/i3/arenas/move", {
        method: 'POST',
        headers: {
          'Bearer' : this.$root.token,
          'Content-Type' : "application/json"
        },
        body: JSON.stringify(movementRequest)
      }).then((response) => {
        if (response.ok) {
          console.log("move successful!")

          const directionRequest = { direction: direction };
          fetch("https://balandrau.salle.url.edu/i3/arenas/direction", {
            method: 'POST',
            headers: {
              'Bearer' : this.$root.token,
              'Content-Type' : "application/json"
            },
            body: JSON.stringify(directionRequest)
          }).then((response) => {
            if (response.ok) {
              console.log("changed direction")
            }

            return response;
          })

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

    playerAttack(index) {
      fetch("https://balandrau.salle.url.edu/i3/arenas/attack/" + this.attacks[index].attack_ID, {
        method: 'POST',
        headers: {
          'Bearer' : this.$root.token,
          'Content-Type' : "application/json"
        }
      }).then((response) => {
        if (response.ok) {
          console.log("attack successful!")
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

    leaveGame() {
      fetch("https://balandrau.salle.url.edu/i3/arenas/" + this.game_ID + "/play", {
        method: 'DELETE',
        headers: {
          'Bearer' : this.$root.token,
          'Content-Type' : "application/json"
        }
      }).then((response) => {
        if (response.ok) {
          this.$router.push('/home');
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

  <header>
    <button v-on:click.prevent="leaveGame()">Leave Game</button>
  </header>

  <main>

    <template v-if="!this.start">
      <h1>Wait until another player joins the arena</h1>
    </template>

    <template v-else-if="this.start && !this.finished">
      <section class="arena">
        <div class="player-status">
          <h2>{{players[1].player_ID}}</h2>
          <h3>{{players[1].hp}}/{{HP_max}} HP</h3>
        </div>


        <table>
          <tr v-for="row in this.size">
            <template v-for="column in this.size">
              <td v-if="row == this.players[0].y_game + 1 && column == this.players[0].x_game + 1">
                {{ this.players[0].player_ID }}
              </td>
              <td v-else-if="row == this.players[1].y_game + 1 && column == this.players[1].x_game + 1">
                {{ this.players[1].player_ID }}
              </td>
              <td v-else></td>
            </template>
          </tr>
        </table>

        <div class="player-status">
          <h2>{{players[0].player_ID}}</h2>
          <h3>{{players[0].hp}}/{{HP_max}} HP</h3>
        </div>

      </section>


      <section class="controls">
        <section class="attacks">
          <template v-for="(attack, index) in this.attacks">
            <button v-on:click.prevent="playerAttack(index)">{{ attack.attack_ID }}</button>
          </template>
        </section>

        <section class="movement">
          <button v-on:click.prevent="move('up')">Up</button>

          <div>
            <button v-on:click.prevent="move('left')">Left</button>
            <button v-on:click.prevent="move('down')">Down</button>
            <button v-on:click.prevent="move('right')">Right</button>
          </div>
        </section>
      </section>
    </template>

    <template v-else>
      <h1>The Game has finished!</h1>
      <button @click="this.$router.push('/home')">Home</button>
    </template>

  </main>


</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    table {
      max-width: 30%;
    }

    .attacks {
      flex: 2;
      max-width: 50%;
    }

    .movement {
      flex: 3;
      max-width: 50%;
    }
  }

  header button {
    width: 100px;
    height: 30px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .arena {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    justify-content: space-evenly;
    align-items: center;
  }

  .player-status {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .controls {
    width: 100%;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ebdeb6;
    border: 5px solid #dec986;
    border-radius: 8px;
  }

  .attacks {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex: 100%;
    box-sizing: border-box;
  }

  .attacks button{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .movement {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 100%;
    box-sizing: border-box;
  }

  .movement div {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
  }

  .movement button {
    width: 70px;
    height: 40px;
  }

  table {
    width: 100%;
    aspect-ratio: 1 / 1;
    table-layout: fixed;
    border-collapse: collapse;
    color: black;
  }

  td {
    width: 50px;
    height: 50px;
    border: 2px solid black;
    text-align: center;
  }

  button {
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  tr:nth-child(even) td:nth-child(odd), tr:nth-child(odd) td:nth-child(even){
    background-color: #77aaff;
  }

  button:hover {background-color: #77aaff}

  button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

</style>