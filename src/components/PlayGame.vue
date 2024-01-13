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
            this.size = game.size;
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

                console.log("Game Info Loaded!");
              } else {
                console.log("Game Info ERROR!");
              }
            })
      }, 5000)
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

  <section class="content">
    <section class="arena">
      <table>
        <tr v-for="row in this.size">
          <template v-for="column in this.size">
            <td v-if="row == this.players[0].y_game && column == this.players[0].x_game">
              {{ this.players[0].player_ID }}
            </td>
            <td v-else-if="row == this.players[1].y_game && column == this.players[1].x_game">
              {{ this.players[1].player_ID }}
            </td>
            <td v-else></td>
          </template>
        </tr>
      </table>
    </section>

    <section class="attacks">
      <template v-for="(attack, index) in this.attacks">
        <button v-on:click.prevent="playerAttack(index)">{{ attack.attack_ID }}</button>
      </template>
    </section>

    <section class="movement">
      <button v-on:click.prevent="move('up')">Up</button>
      <button v-on:click.prevent="move('right')">Right</button>
      <button v-on:click.prevent="move('left')">Left</button>
      <button v-on:click.prevent="move('down')">Down</button>
    </section>
  </section>


</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    .arena {
      flex: auto;
      max-width: 50%;
    }

    .attacks {
      flex: auto;
      max-width: 20%;
    }

    .movement {
      flex: auto;
      max-width: 30%;
    }
  }

  .attacks {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .movement {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  table {
    width: 50%;
    aspect-ratio: 1 / 1;
    table-layout: fixed;
    border-collapse: collapse;
    color: black;
  }

  td {
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }

</style>