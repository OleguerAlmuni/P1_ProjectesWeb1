<script>

  import {defineComponent} from "vue";
  import Header from "../components/Header.vue";

  export default defineComponent({
    components: {Header}
  })
</script>

<template>
  <Header></Header>

  <nav>
    <router-link to="/playGame">
      <button>Current Game</button>
    </router-link>
  </nav>

  <main>
    <router-link to="/createArena">
      <button class="medium-button">Create Arena</button>
    </router-link>

    <router-link to="/availableGames">
      <button class="small-button">Available Games</button>
    </router-link>

    <router-link to="/gameFinder">
      <button class="small-button">Game Finder</button>
    </router-link>
  </main>
</template>

<style scoped>
  @media only screen and (min-width: 768px) {
    .small-button {
      max-width: 49%;
    }
  }

  nav {
    margin-top: 10px;
  }

  nav button {
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  .medium-button {
    width: 100%;
    height: 150px;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  .small-button {
    width: 100%;
    height: 100px;
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

</style>