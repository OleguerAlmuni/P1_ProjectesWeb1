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
      player2_attacks: [],
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
                    console.log("Player 1 attacks loaded!");
                    console.log(this.player1_attacks);

                    // Here we fetch the equipped attacks from player 2 and store them for easier access.
                    fetch("https://balandrau.salle.url.edu/i3/players/" + this.players[1].player_ID + "/attacks", {
                      method: 'GET',
                      headers: {
                        'Bearer' : this.$root.token,
                        'Content-Type' : "application/json"
                      }
                    }).then((response) => response.json())
                        .then((res) => {
                          if (res.error == undefined) {
                            this.getEquippedAttacks(res, this.player2_attacks);
                            console.log("Player 2 attacks loaded!");
                            console.log(this.player2_attacks);
                          } else {
                            console.log("Load attacks 2 ERROR!");
                          }
                        })
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
      for (let attack in attack_array) {
        if (attack.equipped == true) {
          equipped_attacks.push(attack);
        }
      }
    },
    move(direction) {
      const movementRequest = { movement: direction };
      fetch("https://balandrau.salle.url.edu/i3/players/arenas/move", {
        method: 'POST',
        headers: {
          'Bearer' : this.$root.token,
          'Content-Type' : "application/json"
        },
        body: JSON.stringify(movementRequest)
      }).then((response) => response.json())
          .then((res) => {
            if (res.error == undefined) {
              //update de la posició?
            }
          })
    },
  }
}
</script>

<template>

</template>

<style scoped>

</style>