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
    <router-link to="/play">
      <button class="play-button">Play</button>
    </router-link>

    <router-link to="/leaderboard">
      <button class="small-button">Leaderboard</button>
    </router-link>

    <router-link to="/gameHistory">
      <button class="small-button">Game History</button>
    </router-link>

    <router-link to="/store">
      <button class="medium-button">Store</button>
    </router-link>

    <router-link to="/attacks">
      <button class="medium-button">Attacks</button>
    </router-link>
  </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    .small-button {
      max-width: 49%;
    }

    .medium-button {
      max-width: 49%;
    }
  }

  header {
    display: flex;
    align-items: center;
    height: 120px;
    color: black;
    background-color: #fffeb3;
    border: 5px solid #ffe28a;
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
  }

  .play-button {
    width: 100%;
    height: 250px;
    padding: 10px;
    margin-bottom: 10px;
    color: white;
    border: 2px solid black;
    background-color: #9ed670;
    box-shadow: 0 9px #d64d4d;
  }

  .small-button {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  .medium-button {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  button:hover {background-color: #6e954e}

  button:active {
    background-color: #6e954e;
    box-shadow: 0 5px #953535;
    transform: translateY(4px);
  }

</style>