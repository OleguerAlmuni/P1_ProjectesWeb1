<script>

import {defineComponent} from "vue";
import Header from "./Header.vue";

export default defineComponent({
  components: {Header}
})
</script>

<template>
  <header>
    <Header title="Play"></Header>
  </header>

  <!--Nav to have a quick access to the current game-->
  <nav>
    <router-link to="/playGame">
      <button>Current Game</button>
    </router-link>
  </nav>

  <section>
    <router-link to="/createArena">
      <button>Create Arena</button>
    </router-link>
  </section>

  <section>
    <router-link to="/availableGames">
      <button>Available Games</button>
    </router-link>
  </section>

  <section>
    <router-link to="/gameFinder">
      <button>Game Finder</button>
    </router-link>
  </section>

</template>

<style scoped>

</style>