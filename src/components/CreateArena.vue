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

    <section class="content">
      <section class="arena-form">
        <form>
          <label for="game_ID">Game ID</label>
          <input type="text" id="game_ID" name="game_ID" v-model="game_ID">
          <label for="size">Board Size</label>
          <input type="number" id="size" name="size" min="2" max="10" v-model="size">
          <label for="HP_max">Maximum HP</label>
          <input type="number" id="HP_max" name="HP_max" min="15" v-model="HP_max">

          <input type="submit" v-on:click.prevent="createArena()" value="Create Game">
        </form>
      </section>

      <section class="arena-preview">
        <table>
          <tr v-for="row in this.size">
            <td v-for="column in this.size"></td>
          </tr>
        </table>
      </section>
    </section>

</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    .arena-form {
      flex: 2;
      max-width: 40%;
    }

    .arena-preview {
      flex: 3;
      max-width: 60%;
      overflow-x: auto;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
  }

  /*
  CSS corresponding to the form section of the view
   */

  .arena-form {
    flex: 100%;
    box-sizing: border-box;
  }

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

  /*
  CSS corresponding to the arena preview section of the view
   */

  .arena-preview {
    display: flex;
    justify-content: center;
    align-content: center;
    flex: 100%;
  }

  .arena-preview table {
    max-width: 100%;
    max-height: 100%;
  }

  table {
    width: 50%;
    aspect-ratio: 1 / 1;
    border-collapse: collapse;
  }

  td {
    border: 1px solid;
  }

</style>