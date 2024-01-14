<script>
  export default {
    data() {
      return {
        playerName: "",
        image: "",
        xp: 0,
        level: 0,
        coins: 0,
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
        console.log("Information downloaded successfully.");
        this.image = res.img;
        this.xp = res.xp;
        this.level = res.level;
        this.coins = res.coins;
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
  }
</script>

<template>
  <header>
    <h1>Battle Arena</h1>

    <h2>Lv. {{ level }}</h2>

    <h2 class="coins">Coins: {{ coins }}</h2>

    <router-link to="/profile">
      <img :src="image" alt="">
    </router-link>
  </header>

  <main>
    <button class="play-button" @click="this.$router.push('/play')">Play</button>

    <div class="smaller-buttons">
      <button class="small-button leaderboard" @click="this.$router.push('/leaderboard')">Leaderboard</button>

      <button class="small-button game-history" @click="this.$router.push('/gameHistory')">Game History</button>
    </div>

    <div class="medium-buttons">
      <button class="medium-button store" @click="this.$router.push('/store')">Store</button>

      <button class="medium-button attacks" @click="this.$router.push('/attacks')">Attacks</button>
    </div>
  </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    .play-button {
      max-width: 98%;
    }

    .leaderboard {
      flex: 2;
      max-width: 50%;
    }

    .game-history {
      flex: 2;
      max-width: 50%;
    }

    .store {
      flex: 2;
      max-width: 50%;
    }

    .attacks {
      flex: 2;
      max-width: 50%;
    }
  }

  header {
    display: flex;
    align-items: center;
    height: 120px;
    color: black;
    background-color: #ebdeb6;
    border: 5px solid #dec986;
    border-radius: 8px;
  }

  header h1 {
    margin-left: 10px;
    margin-right: auto;
  }

  header h2 {
    padding: 5px;
    margin-left: 10px;
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
  }

  img {
    margin-left: 10px;
    margin-right: 10px;
    border: 2px solid black;
    border-radius: 50%;
    max-height: 90px;
    max-width: 90px;
  }

  main {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .play-button {
    width: 100%;
    height: 250px;
    padding: 10px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  .smaller-buttons {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;
  }

  .small-button {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  .medium-buttons {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  .medium-button {
    box-sizing: border-box;
    width: 100%;
    height: 75px;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  button:hover {background-color: #77aaff}

  button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

</style>