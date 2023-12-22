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
      player1_attacks: [],
    }
  },
  mounted() {

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
                    this.getEquippedAttacks(res, this.player1_attacks);
                  } else {
                    console.log("Load attacks 1 ERROR!");
                  }
                })
          } else {
            console.log("Game Info ERROR!");
          }
        })
  },
  methods: {
    getEquippedAttacks(attack_array, equipped_attacks) {
      attack_array.forEach((attack) => {
        console.log(attack);
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
  <button v-on:click.prevent="move('down')">Down</button>
</template>

<style scoped>

</style>