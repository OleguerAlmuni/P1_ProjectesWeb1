<script>
  import Header from "./Header.vue";

  export default {
    components: {Header},
    data() {
      return {
        game_ID: "",
        size: 2,
        HP_max: 15,
      }
    },
    methods: {
      createArena() {
        const createArenaRequest = { game_ID: this.game_ID, size: this.size, HP_max: this.HP_max };
        fetch("https://balandrau.salle.url.edu/i3/arenas", {
          method: 'POST',
          headers: {
            'Bearer' : this.$root.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createArenaRequest)
        }).then((response) => {
          if (response.ok) {
            this.response = "Arena created!";
            this.$router.push('/playGame');
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
    <Header title="Create Game"></Header>

    <div class="row">
        <div class="col-4 col-s-12">
        <form>
          <label for="game_ID">Game ID</label>
          <input type="text" id="game_ID" name="game_ID" v-model="game_ID">
          <label for="size">Board Size</label>
          <input type="number" id="size" name="size" min="2" max="10" v-model="size">
          <label for="HP_max">Maximum HP</label>
          <input type="number" id="HP_max" name="HP_max" min="15" v-model="HP_max">

          <input type="submit" v-on:click.prevent="createArena()" value="Create Game">
        </form>

        <p>{{ response }}</p>
      </div>

      <div class="col-8 col-s-12 grid">

      </div>
    </div>
</template>

<style scoped>

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  input[type=submit] {
    margin: auto;
    width: 50%;
    background-color: #0bbaff;
    border: 2px solid #242424;
    color: white;
    cursor: pointer;
    padding: 16px 32px;
  }

  input[type=number] {

  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

</style>