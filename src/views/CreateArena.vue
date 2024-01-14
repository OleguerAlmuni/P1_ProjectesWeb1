<script>
  import Header from "../components/Header.vue";

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
    <Header></Header>

    <main>
      <section class="arena-form">
        <form>
          <label for="game_ID">GAME ID</label>
          <input type="text" id="game_ID" name="game_ID" v-model="game_ID">
          <label for="size">BOARD SIZE</label>
          <input type="number" id="size" name="size" min="2" max="10" v-model="size">
          <label for="HP_max">MAXIMUM HP</label>
          <input type="number" id="HP_max" name="HP_max" min="15" v-model="HP_max">

          <input type="submit" v-on:click.prevent="createArena()" value="Create Game">
        </form>
      </section>

      <section class="arena-preview">
        <!--Con v-model, el tamaño de la tabla aumenta cuando lo hace la variable size-->
        <table>
          <tr v-for="row in this.size">
            <td v-for="column in this.size"></td>
          </tr>
        </table>
      </section>
    </main>

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
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 15px;
    color: black;
    background-color: #ebdeb6;
    border: 5px solid #dec986;
    border-radius: 8px;
  }

  /*
  CSS corresponding to the form section of the view
   */

  .arena-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 100%;
    box-sizing: border-box;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    background-color: #99ccff;
    border: 5px solid black;
  }
  input {
    margin-bottom: 10px;
  }

  input[type=submit] {
    margin-top: 10px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
    border-radius: 15px;
    cursor: pointer;
    padding: 16px 32px;
  }

  input[type=submit]:hover {background-color: #77aaff}

  input[type=submit]:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

  /*
  CSS corresponding to the arena preview section of the view
   */

  .arena-preview {
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10px;
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
    background-color: #99ccff;
  }

  td {
    border: 2px solid black;
  }

  tr:nth-child(even) td:nth-child(odd), tr:nth-child(odd) td:nth-child(even){
    background-color: #77aaff;
  }

</style>