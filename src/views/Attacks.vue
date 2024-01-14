<script>
  import Header from '../components/Header.vue'
  export default {
    components: {Header},
    data() {
      return {
        "equipedAttacks": [],
        "attacks": [],
      }
    },

    mounted() {
      this.showAttacks();
    },
    methods: {
      goToAttack(attack_ID, equiped) {
        this.$router.push({
          path: "attacks/attack",
          query: {
            attack: attack_ID,
            itsEquiped: equiped,
            equipedAttacks: JSON.stringify(this.equipedAttacks),
          }
        })
      },

      showAttacks() {
        fetch('https://balandrau.salle.url.edu/i3/players/attacks', {
          method: 'GET',
          headers: {
            'Bearer': this.$root.token,
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
            .then(data => {
              data.forEach(attack => {
                if (attack.equipped) {
                  this.equipedAttacks.push(attack);
                } else {
                  this.attacks.push(attack)
                }
              });
            })
            .catch(error => {
              console.log("2");
            });
      },
    }
  }
</script>


<template>
  <Header></Header>

  <main class="backpack-view">
    <section class="equipped-attacks">
      <h2>Equipped Attacks</h2>
      <section v-for="attack in equipedAttacks" :key="attack.attack_ID">
        <button v-if="!attack.on_sale" v-on:click.prevent="goToAttack(attack.attack_ID, true)">
          <h1>{{attack.attack_ID}}</h1>
        </button>
      </section>
    </section>

    <section class="all-attacks">
      <h2>Backpack</h2>

      <div>
        <section v-for="attack in attacks" :key="attack.attack_ID">
          <button v-if="!attack.on_sale" v-on:click.prevent="goToAttack(attack.attack_ID, false)">
            <h1>{{attack.attack_ID}}</h1>
          </button>
        </section>
      </div>
    </section>
  </main>

</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    .equipped-attacks {
      flex: 2;
      max-width: 20%;
      margin-right: auto;
    }

    .all-attacks {
      flex: 3;
      max-width: 79%;
    }
  }

  .backpack-view {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 15px;
    color: black;
    background-color: #99ccff;
    border: 5px solid black;
    border-radius: 8px;
  }

  .equipped-attacks {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 100%;
    margin-top: 10px;
    color: black;
    background-color: #ebdeb6;
    border: 5px solid black;
    border-radius: 8px;
  }

  .all-attacks {
    width: 100%;
    flex: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    color: black;
    background-color: #ebdeb6;
    border: 5px solid black;
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  div button {
    margin-right: 5px;
    margin-left: 5px;
  }

  button {
    margin-bottom: 20px;
    color: white;
    border: 2px solid black;
    background-color: #99ccff;
    box-shadow: 0 9px #abb2b9;
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  button:hover {background-color: #77aaff}

  button:active {
    background-color: #77aaff;
    box-shadow: 0 5px #808b96;
    transform: translateY(4px);
  }


</style>