<script>
  import Header from "./Header.vue";

  export default {
    components: {Header},
    data() {
      return {
        game_ID: String,
        size: Number,
        HP_max: Number,
      }
    },
    methods: {
      createArena() {
        const createArenaRequest = { game_ID: this.game_ID, size: this.size, HP_max: this.HP_max};
        fetch("https://balandrau.salle.url.edu/i3/arenas", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(createArenaRequest)
        }).then((response) => {
          if (response.ok) {
            this.response = "Arena created!";
            return response;
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
        }).catch((error) => {
          this.response = "No conection with API";
        });
      }
    }
  }
</script>

<template>
  <main style="display: flex; flex-direction: column">
    <Header title="Create Game"></Header>

    <div class="row">
      <div class="col-4">
        <form style="display: flex; flex-direction: column">
          <input type="text" placeholder="game_ID" name="game_ID" v-model="game_ID">
          <input type="number" placeholder="0" name="size" v-model="size">
          <input type="number" placeholder="0" name="HP_max" v-model="HP_max">

          <input type="submit" v-on:click.prevent="createArena()" value="Create Game">
        </form>

        <p>{{ response }}</p>
      </div>

      <div class="col-8 grid">

      </div>
    </div>
  </main>
</template>

<style scoped>

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

</style>