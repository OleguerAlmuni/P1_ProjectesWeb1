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
    fetch("https://balandrau.salle.url.edu/i3/players/arenas/current", {
      method: 'GET',
      headers: {
        'Bearer' : this.$root.token,
        'Content-Type' : "application/json"
      }
    }).then((response) => response.json())
        .then((res) => {
          if (res.error == undefined) {
            this.game_ID = res.game_ID;
            this.size = res.size;
            this.creation_date = res.creation_date;
            this.finished = res.finished;
            this.HP_max = res.HP_max;
            this.start = res.start;
            this.players = res.players_games;
            console.log("Game Info Loaded!")
          } else {
            console.log("Game Info ERROR!");
          }
        })
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
          } else {
            console.log("Load attacks 1 ERROR!");
          }
        })
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
          } else {
            console.log("Load attacks 2 ERROR!");
          }
        })
  },
  methods: {
    getEquippedAttacks(attack_array, equipped_attacks) {
      attack_array.forEach(selectEquipped());

      function selectEquipped(attack) {
        if (attack.equipped == true) {
          equipped_attacks.push(attack.attack_ID);
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