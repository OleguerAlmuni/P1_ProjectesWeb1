<script>
  import Header from "../components/Header.vue";

  export default {
    components: {Header},
    data() {
      return {
        currentGame: false
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
            if (res[0].game_ID == undefined) {
              this.currentGame = false;
            } else {
              this.currentGame = true;
            }
          })
    }
  }
</script>

<template>
  <Header></Header>

  <nav v-if="currentGame">
      <button @click="this.$router.push('/playGame')">Current Game</button>
  </nav>

  <main>
    <button @click="this.$router.push('/createArena')" class="medium-button">Create Arena</button>

    <div>
      <button @click="this.$router.push('/availableGames')" class="small-button">Available Games</button>

      <button @click="this.$router.push('/gameFinder')" class="small-button">Game Finder</button>
    </div>
  </main>
</template>

<style scoped>
  @media only screen and (min-width: 768px) {
    .small-button {
      flex: 2;
      max-width: 49%;
    }
  }

  nav {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  nav button {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  main div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .medium-button {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
  }

  .small-button {
    width: 100%;
    height: 100px;
    flex: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 20px;
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