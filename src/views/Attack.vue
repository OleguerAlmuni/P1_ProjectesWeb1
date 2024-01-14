<script>
  import Header from '../components/Header.vue'
  export default {
    components: {Header},
    data() {
      return {
        attack: JSON.parse(this.$route.query.attack),
        equipedAttacks: JSON.parse(this.$route.query.equipedAttacks),
        response: "",
        price: 0,
        showPanel: false,
        itsEquiped: this.$route.query.itsEquiped == 'true',
        attack_SW: "",
      }
    },

    mounted() {
      if (this.equipedAttacks.length == 3) {
        this.showPanel = true;
      }
      else {
        this.showPanel = false;
      }
    },

    methods: {
      goBack() {
        this.$router.push("/attacks")
      },

      equipItem() {
        fetch("https://balandrau.salle.url.edu/i3/players/attacks/"+ this.attack.attack_ID, {
          method: 'POST',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }
          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
          alert("You have 3 attacks already equiped");
        }).catch((error) => {
          this.response = "No connection with API";
        });
      },

      unequipAttack() {
        fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack.attack_ID, {
          method: 'DELETE',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
        }).catch((error) => {
          this.response = "No connection with API";
        });
      },

      sellItem() {
        const sell = { price: this.price};
        fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + this.attack.attack_ID + "/sell", {
          method: 'POST',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(sell)
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }

          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
        }).catch((error) => {
          this.response = "No connection with API";
        });
      },

      switchAttack(attack2) {
        fetch("https://balandrau.salle.url.edu/i3/players/attacks/" + this.attack.attack_ID + "/" + attack2.attack_ID, {
          method: 'PATCH',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          },
        }).then((response) => {
          if (response.ok) {
            this.goBack();
          }
          return response.json();
        }).then((res) => {
          if (res.ok == undefined) {
            this.response = res.error.message;
          }
          switchAttacks();
        }).catch((error) => {
          this.response = "No connection with API";
        });
      }
    }
  }
</script>

<template>
  <Header></Header>

  <main class="attack-view">
    <h1>{{ attack.attack_ID }}</h1>
    <h3> Power: {{attack.power}}</h3>
    <h3> Positions: {{attack.positions}}</h3>

    <section v-if="showPanel && !itsEquiped" class="switch-section">
      <h3>Which attack do you want to swap?</h3>

      <section class="current-attacks">
        <div v-for="attack2 in equipedAttacks">
          <button v-on:click="switchAttack(attack2)">
            <h1>{{attack2.attack_ID}}</h1>
          </button>
        </div>
      </section>

    </section>

    <button v-if="!showPanel && !itsEquiped" @click="equipItem" class="equip-button">Equip</button>
    <button v-if="itsEquiped" @click="unequipAttack" class="equip-button">Unequip</button>

    <form>
      <h3>Sell Attack</h3>
      <label for="price">Enter a number between 0 and 10000:</label>
      <input type="number" id="price" name="price" min="0" max="10000" v-model="price">
      <input type="submit" v-on:click.prevent="sellItem()" value="Sell">
    </form>

  </main>
</template>

<style>
  @media only screen and (min-width: 768px) {
    .attack-view {
      max-width: 40%;
    }

    .equip-button {
      max-width: 60%;
    }
  }

  .attack-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    color: black;
    background-color: #99ccff;
    border: 5px solid black;
    border-radius: 8px;
  }

  .equip-button {
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
    width: 100px;
    height: 100px;
  }

  .equip-button button:hover {
    background-color: #77aaff
  }

  .equip-button button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

  .current-attacks button {
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .current-attacks button:hover {background-color: #77aaff}

  .current-attack button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }

  .switch-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  .current-attacks {
    display: flex;
    flex-direction: row;
  }

  div button {
    margin-left: 5px;
    margin-right: 5px;
  }

  .equip-button {
    width: 80%;
    height: 100px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    margin-top: 10px;
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 8px;
  }

  input {
    width: 100%;
    margin-top: 10px;
  }

</style>