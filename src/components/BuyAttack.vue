<script>

import {defineComponent} from "vue";
import Header from "./Header.vue";
import buyAttack from "./BuyAttack.vue";

export default defineComponent({

    computed: {
        buyAttack() {
            return buyAttack
        }
    },

    components: { Header },

    data() {
        return {
            attackData: [],
            attack_IW: "",
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

        attackWanted(attack) {
            this.attack_IW = attack;
        },

        buyAttack() {
            fetch("https://balandrau.salle.url.edu/i3/shop/attacks/" + this.attack_IW + "/buy", {
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
})
</script>

<template>
    <Header title="Buy Attacks"></Header>
    <div class="row">
        <div  class="col-4 col-s-12">
            <form style="display: flex; flex-direction: column">
                <h2>Buy</h2>
                <button type="button" v-on:click.prevent="buyAttack()" class="click-button">Buy {{attack_IW}}</button>
            </form>
        </div>
        <div class="col-8 col-s-12">
            <table>
               <thead>
                   <tr>
                       <th>Attack ID</th>
                       <th>Positions</th>
                       <th>Power</th>
                       <th>Price</th>
                       <th>Level Needed</th>
                   </tr>
               </thead>
               <tbody>
                   <tr v-for="attack in attackData" :key="attack.attack_ID">
                       <td>{{ attack.attack_ID }}</td>
                       <td>{{ attack.positions }}</td>
                       <td>{{ attack.power }}</td>
                       <td>{{ attack.price }}</td>
                       <td>{{ attack.level_needed }}</td>
                       <td><button v-on:click.prevent="attackWanted(attack.attack_ID)"></button></td>
                   </tr>
               </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>

  @media only screen and (min-width: 768px) {

  }

    .click-button {
        font-family: Inter;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

        .click-button:hover {
            background-color: #45a049;
        }

        .click-button:active {
            background-color: #3e8e41;
        }
</style>