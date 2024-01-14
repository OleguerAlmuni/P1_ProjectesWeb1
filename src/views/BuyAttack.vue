<script>
import Header from "../components/Header.vue";

export default {
    components: { Header },
    data() {
        return {
            attackData: [],
            response: "",
        };
    },

    mounted() {
        fetch("https://balandrau.salle.url.edu/i3/shop/attacks", {
            method: 'GET',
            headers: {
                'Bearer': this.$root.token,
                'Content-Type': 'application/json'
            },

            }).then((response) => response.json())
                .then((res) => {
                      if (res.error == undefined) {
                        this.attackData = res;

                      } else {
                        console.log("ERROR!");
                      }
                })
    },

    methods: {
       buyAttack(attack_ID) {
            fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + attack_ID + "/buy", {
                method: 'POST',
                headers: {
                  'Bearer': this.$root.token,
                  'Content-Type': 'application/json'
                },
            }).then((response) => {
                if (response.ok) {
                  this.response = "Attack bought!";
                  return response;
                }
                return response.json();
            }).then((res) => {
                if (res.ok == undefined) {
                  this.response = res.error.message;
                }
            }).catch((error) => {
                this.response = "No connection with API";
            });
        }
    }
}
</script>

<template>
  <Header></Header>

  <main>
    <table>
      <thead>
      <tr>
        <th>Attack ID</th>
        <th>Positions</th>
        <th>Power</th>
        <th>Price</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="attack in attackData" :key="attack.attack_ID">
        <td>{{ attack.attack_ID }}</td>
        <td>{{ attack.positions }}</td>
        <td>{{ attack.power }}</td>
        <td>{{ attack.price }}</td>
        <td>
          <button v-on:click.prevent="buyAttack(attack.attack_ID)">BUY</button>
        </td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<style scoped>

  @media only screen and (min-width: 768px) {
    table {
      max-width: 60%;
    }
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  table {
    width: 100%;
    background-color: #99ccff;
  }

  table, th, td {
    color: black;
    border: 1px solid;
    border-collapse: collapse;
  }

  th, td {
    text-align: center;
    padding: 5px;
  }

  thead {
    background-color: #77aaff;
    color: black;
  }

</style>